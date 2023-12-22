# Use uma imagem base que inclua o ambiente desejado
FROM node:alpine

# Defina o diretório de trabalho como /app
WORKDIR /app

COPY . .
RUN npm install
# RUN npm run build

# ENV NEXT_PUBLIC_EVEREST_AUTH_SERVER=""
# ENV NEXT_PUBLIC_EVEREST_RESOURCES_SERVER=""

# Dê permissões de execução ao script start.sh
RUN chmod +x start.sh

# Define o comando padrão a ser executado quando o contêiner é iniciado
# CMD ["npm", "run", "dev"]
CMD ["sh", "start.sh"]