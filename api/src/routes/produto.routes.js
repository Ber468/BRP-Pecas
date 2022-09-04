const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');

// ==> Definindo as rotas do CRUD - 'Produto':

// ==> Rota responsável por criar um novo 'Produto': (POST): localhost:3001/api/produto
router.post('/produto', pecaController.createProduto);
// ==> Rota responsável por listar todas as 'Produto': (GET): localhost:3001/api/produto
router.get('/produto', pecaController.listAllProduto);
// ==> Rota responsável por selecionar 'Produto' pelo 'Id': (GET): localhost:3001/api/produto/:id
router.get('/produto/:id', pecaController.findProdutoById);
// ==> Rota responsável por atualizar 'Produto' pelo 'Id': (PUT): localhost: 3001/api/produto/:id
router.put('/produto/:id', pecaController.updateProdutoById);
// ==> Rota responsável por excluir 'Produto' pelo 'Id': (DELETE): localhost:3001/api/produto/:id
router.delete('/produto/:id', pecaController.deleteProdutoById);

module.exports = router;