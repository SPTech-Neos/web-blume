# Etapa 1: Build da aplicação
FROM node:18-alpine AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos package.json e yarn.lock para instalar as dependências
COPY package.json yarn.lock ./

# Instalar as dependências
RUN yarn install

# Copiar todos os arquivos da aplicação para o container
COPY . .

# Build da aplicação
RUN yarn build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copiar os arquivos da build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar a configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para acessar a aplicação
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
