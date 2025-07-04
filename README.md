# real-time-quote
Real-time quotation using artificial intelligence models with Node.js

# Instruções para instalação no ambiente local (Considerando já instalado o Node.js)

# 1- Crie um arquivo chamado .env e adicione as variáveis necessárias. Exemplo:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/sua-base
OPENROUTER_API_KEY=sk-xxxxx

# 2- Na raiz do projeto (onde está o package.json), execute: npm install
Isso vai instalar todas as dependências listadas em "dependencies" e "devDependencies" no package.json.

# 3- Rodar o projeto. 
Execute o comando: npm start
Se tudo estiver ok. Esse será o retorno esperado no terminal:

Conectado ao MongoDB
Servidor rodando na porta 3000

# 4- Testar a API
Faça requisições com curl, Postman ou outro cliente para endpoints como:

POST http://localhost:3000/api/chat
Content-Type: application/json

{
  "userId": "123",
  "prompt": "Como está a cotação do dólar hoje?"
}

# Obs: Foi utilizado uma model gratuita no Open Router, portanto existem limitações em obter a cotação em tempo real.

