require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/router');
const server = express();
const err = require('./middlewares/middlewareError');
const PORT = process.env.PORT || 3339;

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(process.env.PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

server.use(err);

// * CORS: //permite acessos para trabalhar com api's. O navegador usa
// o cors para permitir solictações de origem cruzada com segurança. Acesso possível a recursos de outros sites, mesmo
// estando em domínios diferentes

// * DOTOENV: // para ler as variáveis do sistema
//(que estão em .env)

// *BODYPARSER : O body-parser é pra converter o body da requisição para vários formatos,
// inclusive json.
