# Etapa 1: Build da aplicação
FROM node:18-alpine AS build


# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Definindo variáveis de ambiente
ARG VITE_API_PATH=http://host.docker.internal/api
ARG VITE_SPRINGSECURITY_USERNAME=admin
ARG VITE_SPRINGSECURITY_PASSWORD=L12345

# Copiar os arquivos package.json e yarn.lock para instalar as dependências
COPY package.json yarn.lock ./

# Instalar as dependências
RUN yarn install

# Copiar todos os arquivos da aplicação para o container
COPY . .

# Build da aplicação
RUN VITE_API_PATH=$VITE_API_PATH VITE_SPRINGSECURITY_USERNAME=$VITE_SPRINGSECURITY_USERNAME VITE_SPRINGSECURITY_PASSWORD=$VITE_SPRINGSECURITY_PASSWORD yarn build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copiar os arquivos da build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar a configuração customizada do Nginx
COPY ./data/nginx/app.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para acessar a aplicação
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]