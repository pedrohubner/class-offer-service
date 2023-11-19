const conn = require("./db/conn");
const express = require('express');
const routes = require('./routes')
const app = express();
const PORT = 8080;

app.use(express.json());

conn();

routes(app);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});