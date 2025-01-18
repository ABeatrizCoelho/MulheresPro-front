# Usa a imagem do Node.js
FROM node:22

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos do projeto
COPY . .

# Compila o projeto para produção
RUN npm run build

# Expõe a porta que o frontend vai rodar
EXPOSE 3000

# Comando para rodar o frontend
CMD ["npm", "start"]
