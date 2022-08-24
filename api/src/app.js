const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const pecaRoute = require('./routes/peca.routes');
const funcionarioRoute = require('./routes/funcionario.routes');
const usuarioRoute = require('./routes/usuario.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', pecaRoute);
app.use('/api/', funcionarioRoute);
app.use('/api/', usuarioRoute);

module.exports = app;
