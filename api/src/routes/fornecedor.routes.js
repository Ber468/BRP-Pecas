const router = require('express-promise-router')();
const fornecedorController = require('../controllers/fornecedor.controller');

// ==> Definindo as rotas do CRUD - 'Fornecedor':

// ==> Rota responsável por criar um novo 'Fornecedor': (POST): localhost:3001/api/fornecedor
router.post('/fornecedor', fornecedorController.createFornecedor);
// ==> Rota responsável por listar todos os 'Fornecedores': (GET): localhost:3001/api/fornecedor
router.get('/fornecedor', fornecedorController.listAllFornecedor);
// ==> Rota responsável por selecionar 'Fornecedores' pelo 'Id': (GET): localhost:3001/api/fornecedor/:id
router.get('/fornecedor/:id', fornecedorController.findFornecedorById);
// ==> Rota responsável por atualizar 'Fornecedores' pelo 'Id': (PUT): localhost: 3001/api/fornecedor/:id
router.put('/fornecedor/:id', fornecedorController.updateFornecedorById);
// ==> Rota responsável por excluir 'Fornecedores' pelo 'Id': (DELETE): localhost:3001/api/fornecedor/:id
router.delete('/fornecedor/:id', fornecedorController.deleteFornecedorById);

module.exports = router;