const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const produtoRoute = require('./routes/produto.routes');
const tipoProdutoRoute = require('./routes/tipoProduto.routes');
const fornecedorRoute = require('./routes/fornecedor.routes');
const usuarioRoute = require('./routes/usuario.routes');
const tipoUsuarioRoute = require('./routes/tipoUsuario.routes');
const pedidoRoute = require('./routes/pedido.routes');
const itemPedidoRoute = require('./routes/itemPedido.routes');
const clienteRoute = require('./routes/cliente.routes');
const vendaRoute = require('./routes/venda.routes');
const itemVendaRoute = require('./routes/itemVenda.routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', produtoRoute);
app.use('/api/', tipoProdutoRoute);
app.use('/api/', fornecedorRoute);
app.use('/api/', usuarioRoute);
app.use('/api/', tipoUsuarioRoute); 
app.use('/api/', pedidoRoute);
app.use('/api/', itemPedidoRoute);
app.use('/api/', clienteRoute);
app.use('/api/', vendaRoute);
app.use('/api/', itemVendaRoute);

module.exports = app;
