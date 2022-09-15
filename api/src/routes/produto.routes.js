const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');

// ==> Definindo as rotas do CRUD - 'Produto':

// ==> Rota responsável por criar um novo 'Produto': (POST): localhost:3001/api/produto
router.post('/produto', produtoController.createProduto);
// ==> Rota responsável por listar todas as 'Produto': (GET): localhost:3001/api/produto
router.get('/produto', produtoController.listAllProduto);
// ==> Rota responsável por selecionar 'Produto' pelo 'Id': (GET): localhost:3001/api/produto/:id
router.get('/produto/:id', produtoController.findProdutoById);
// ==> Rota responsável por atualizar 'Produto' pelo 'Id': (PUT): localhost: 3001/api/produto/:id
router.put('/produto/:id', produtoController.updateProdutoById);
// ==> Rota responsável por excluir 'Produto' pelo 'Id': (DELETE): localhost:3001/api/produto/:id
router.delete('/produto/:id', produtoController.deleteProdutoById);

module.exports = router;