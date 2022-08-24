const router = require('express-promise-router')();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Definindo as rotas do CRUD - 'Funcionario':

// ==> Rota responsável por criar um novo 'Funcionario': (POST): localhost:3001/api/funcionario
router.post('/funcionario', funcionarioController.createFuncionario);
// ==> Rota responsável por listar todos os 'Funcionarios': (GET): localhost:3001/api/funcionario
router.get('/funcionario', funcionarioController.listAllFuncionario);
// ==> Rota responsável por selecionar 'Funcionarios' pelo 'Id': (GET): localhost:3001/api/funcionario/:id
router.get('/funcionario/:id', funcionarioController.findFuncionarioById);
// ==> Rota responsável por atualizar 'Funcionarios' pelo 'Id': (PUT): localhost: 3001/api/funcionario/:id
router.put('/funcionario/:id', funcionarioController.updateFuncionarioById);
// ==> Rota responsável por excluir 'Funcionarios' pelo 'Id': (DELETE): localhost:3001/api/funcionario/:id
router.delete('/funcionario/:id', funcionarioController.deleteFuncionarioById);

module.exports = router;