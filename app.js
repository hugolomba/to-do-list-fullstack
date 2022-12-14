require("dotenv/config"); // permite acesso ao arquivo .env
const express = require("express");
const app = express();

// banco de dados
require("./db");

// configurações
require("./config")(app);

// rotas
app.use("/auth", require("./routes/auth.routes")); // importa o arquivo  onde as rotas estão definididas

// erros
// app.use((req, res, next) => {
//   res.status(404).json("Não encontrado!");
// });

require("./error-handling")(app); // impostamos e já executamos a função  já executando ela

// exportar app
module.exports = app;
