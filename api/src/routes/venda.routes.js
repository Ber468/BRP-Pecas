const router = require('express-promise-router')();
const vendaController = require('../controllers/venda.controller');

// ==> Definindo as rotas do CRUD - 'Venda':

// ==> Rota responsável por criar um novo 'Venda': (POST): localhost:3001/api/venda
router.post('/venda', vendaController.createVenda);
// ==> Rota responsável por listar todos os 'Vendas': (GET): localhost:3001/api/venda
router.get('/venda', vendaController.listAllVenda);
// ==> Rota responsável por selecionar 'Vendas' pelo 'Id': (GET): localhost:3001/api/venda/:id
router.get('/venda/:id', vendaController.findVendaById);
// ==> Rota responsável por atualizar 'Vendas' pelo 'Id': (PUT): localhost: 3001/api/venda/:id
router.put('/venda/:id', vendaController.updateVendaById);
// ==> Rota responsável por excluir 'Vendas' pelo 'Id': (DELETE): localhost:3001/api/venda/:id
router.delete('/venda/:id', vendaController.deleteVendaById);

module.exports = router;