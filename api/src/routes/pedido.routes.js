const router = require('express-promise-router')();
const pedidoController = require('../controllers/pedido.controller');

// ==> Definindo as rotas do CRUD - 'Pedido':

// ==> Rota responsável por criar um novo 'Pedido': (POST): localhost:3001/api/pedido
router.post('/pedido', pedidoController.createPedido);
// ==> Rota responsável por listar todos os 'Pedidos': (GET): localhost:3001/api/pedido
router.get('/pedido', pedidoController.listAllPedido);
// ==> Rota responsável por selecionar 'Pedidos' pelo 'Id': (GET): localhost:3001/api/pedido/:id
router.get('/pedido/:id', pedidoController.findPedidoById);
// ==> Rota responsável por atualizar 'Pedidos' pelo 'Id': (PUT): localhost: 3001/api/pedido/:id
router.put('/pedido/:id', pedidoController.updatePedidoById);
// ==> Rota responsável por excluir 'Pedidos' pelo 'Id': (DELETE): localhost:3001/api/pedido/:id
router.delete('/pedido/:id', pedidoController.deletePedidoById);

module.exports = router;