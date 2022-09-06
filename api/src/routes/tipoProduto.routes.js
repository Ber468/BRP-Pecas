const router = require('express-promise-router')();
const tipoProdutoController = require('../controllers/tipoProduto.controller');

// ==> Definindo as rotas do CRUD - 'Venda':

// ==> Rota responsável por criar um novo 'Tipos de Produtos': (POST): localhost:3001/api/tipoProduto
router.post('/tipoProduto', tipoProdutoController.createTipoProduto);
// ==> Rota responsável por listar todos os 'Tipos de Produtos': (GET): localhost:3001/api/tipoProduto
router.get('/tipoProduto', tipoProdutoController.listAllTipoProduto);
// ==> Rota responsável por selecionar 'Tipos de Produtos' pelo 'Id': (GET): localhost:3001/api/tipoProduto/:id
router.get('/tipoProduto/:id', tipoProdutoController.findTipoProdutoById);
// ==> Rota responsável por atualizar 'Tipos de Produtos' pelo 'Id': (PUT): localhost: 3001/api/tipoProduto/:id
router.put('/tipoProduto/:id', tipoProdutoController.updateTipoProdutoById);
// ==> Rota responsável por excluir 'Tipos de Produtos' pelo 'Id': (DELETE): localhost:3001/api/tipoProduto/:id
router.delete('/tipoProduto/:id', tipoProdutoController.deleteTipoProdutoById);

module.exports = router; 