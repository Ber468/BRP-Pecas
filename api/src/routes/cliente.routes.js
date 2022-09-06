const router = require('express-promise-router')();
const clienteController = require('../controllers/cliente.controller');

// ==> Definindo as rotas do CRUD - 'Cliente':

// ==> Rota responsável por criar um novo 'Cliente': (POST): localhost:3001/api/cliente
router.post('/cliente', clienteController.createCliente);
// ==> Rota responsável por listar todos os 'Clientes': (GET): localhost:3001/api/cliente
router.get('/cliente', clienteController.listAllCliente);
// ==> Rota responsável por selecionar 'Clientes' pelo 'Id': (GET): localhost:3001/api/cliente/:id
router.get('/cliente/:id', clienteController.findClienteById);
// ==> Rota responsável por atualizar 'Clientes' pelo 'Id': (PUT): localhost: 3001/api/cliente/:id
router.put('/cliente/:id', clienteController.updateClienteById);
// ==> Rota responsável por excluir 'Clientes' pelo 'Id': (DELETE): localhost:3001/api/cliente/:id
router.delete('/cliente/:id', clienteController.deleteClienteById);

module.exports = router;