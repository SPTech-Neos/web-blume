#!/bin/bash

domains=(neos.blume.com www.neos.blume.com)
cert_path="/etc/ssl/certs/selfsigned.crt"
key_path="/etc/ssl/private/selfsigned.key"

# Gera um certificado autoassinado
echo "### Generating a self-signed certificate for $domains ..."
mkdir -p /etc/ssl/certs /etc/ssl/private
openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout "$key_path" -out "$cert_path" -subj "/C=BR/ST=State/L=City/O=Organization/CN=${domains[0]}"

echo "### Self-signed certificate generated at $cert_path"

# Reinicia o Nginx
echo "### Reloading nginx ..."
docker compose exec nginx nginx -s reload
