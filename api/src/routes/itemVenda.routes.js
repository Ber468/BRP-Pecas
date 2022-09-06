const router = require('express-promise-router')();
const itemVendaController = require('../controllers/itemVenda.controller');

// ==> Definindo as rotas do CRUD - 'itemVenda':

// ==> Rota responsável por criar um novo 'itemVenda': (POST): localhost:3001/api/itemVenda
router.post('/itemVenda', itemVendaController.createItemVenda);
// ==> Rota responsável por listar todos os 'itemVendas': (GET): localhost:3001/api/itemVenda
router.get('/itemVenda', itemVendaController.listAllItemVenda);
// ==> Rota responsável por selecionar 'itemVenda' pelo 'Id': (GET): localhost:3001/api/itemVenda/:id
router.get('/itemVenda/:id', itemVendaController.findItemVendaById);
// ==> Rota responsável por atualizar 'itemVenda' pelo 'Id': (PUT): localhost: 3001/api/itemVenda/:id
router.put('/itemVenda/:id', itemVendaController.updateItemVendaById);
// ==> Rota responsável por excluir 'itemVenda' pelo 'Id': (DELETE): localhost:3001/api/itemVenda/:id
router.delete('/itemVenda/:id', itemVendaController.deleteItemVendaById);

module.exports = router; 