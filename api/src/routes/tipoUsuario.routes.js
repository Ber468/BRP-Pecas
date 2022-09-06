const router = require('express-promise-router')();
const tipoUsuarioController = require('../controllers/tipoUsuario.controller');

// ==> Definindo as rotas do CRUD - 'Venda':

// ==> Rota responsável por criar um novo 'Tipos de Usuarios': (POST): localhost:3001/api/tipoUsuario
router.post('/tipoUsuario', tipoUsuarioController.createTipoUsuario);
// ==> Rota responsável por listar todos os 'Tipos de Usuarios': (GET): localhost:3001/api/tipoUsuario
router.get('/tipoUsuario', tipoUsuarioController.listAllTipoUsuario);
// ==> Rota responsável por selecionar 'Tipos de Usuarios' pelo 'Id': (GET): localhost:3001/api/tipoUsuario/:id
router.get('/tipoUsuario/:id', tipoUsuarioController.findTipoUsuarioById);
// ==> Rota responsável por atualizar 'Tipos de Usuarios' pelo 'Id': (PUT): localhost: 3001/api/tipoUsuario/:id
router.put('/tipoUsuario/:id', tipoUsuarioController.updateTipoUsuarioById);
// ==> Rota responsável por excluir 'Tipos de Usuario' pelo 'Id': (DELETE): localhost:3001/api/tipoUsuario/:id
router.delete('/tipoUsuario/:id', tipoUsuarioController.deleteTipoUsuarioById);

module.exports = router;