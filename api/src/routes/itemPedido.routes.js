const router = require('express-promise-router')();
const itemPedidoController = require('../controllers/itemPedido.controller');

// ==> Definindo as rotas do CRUD - 'itemPedido':

// ==> Rota responsável por criar um novo 'itemPedido': (POST): localhost:3001/api/itemPedido
router.post('/itemPedido', itemPedidoController.createItemPedido);
// ==> Rota responsável por listar todos os 'itemPedidos': (GET): localhost:3001/api/itemPedido
router.get('/itemPedido', itemPedidoController.listAllItemPedido);
// ==> Rota responsável por selecionar 'itemPedido' pelo 'Id': (GET): localhost:3001/api/itemPedido/:id
router.get('/itemPedido/:id', itemPedidoController.findItemPedidoById);
// ==> Rota responsável por atualizar 'itemPedido' pelo 'Id': (PUT): localhost: 3001/api/itemPedido/:id
router.put('/itemPedido/:id', itemPedidoController.updateItemPedidoById);
// ==> Rota responsável por excluir 'itemPedido' pelo 'Id': (DELETE): localhost:3001/api/itemPedido/:id
router.delete('/itemPedido/:id', itemPedidoController.deleteItemPedidoById);

module.exports = router; 