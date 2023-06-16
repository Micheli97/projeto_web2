const express = require('express');
const http = require('http');
const database = require("./src/config/database");
const dotenv = require("dotenv");
const loginRouter = require("./src/routers/user/user_router");
const teamsRouter = require("./src/routers/teams/teams_router");
const playerRouter = require("./src/routers/player/player_router");
const championsRouter = require("./src/routers/championship/championship_router");
const auth = require("./src/config/auth.js");
const streamRouter = require("./src/routers/stream/stream_router");

const app = express();
const Server = http.createServer(app);

// Inicializando variaveis do dotEnv 
dotenv.config();

// Inicializando o banco de dados
database();

// Configurando middleware para analizar requisicao JSON enviadas pelo cliente
app.use(express.json());

// Listando rotas
app.use("/api/users", loginRouter);
app.use("/api/teams", auth.validateToken, teamsRouter);
app.use("/api/player", auth.validateToken, playerRouter);
app.use("/api/champions", auth.validateToken, championsRouter);
app.use("/api/stream", auth.validateToken, streamRouter);


// Configuração da porta 
app.listen(4000);

Server.listen(5000, () => {
  console.log("Servidor está ouvindo na porta 5000");
});

module.exports = Server;