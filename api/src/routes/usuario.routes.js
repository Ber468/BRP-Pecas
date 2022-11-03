const router = require("express-promise-router")();
const usuarioController = require("../controllers/usuario.controller");

// ==> Definindo as rotas do CRUD - 'Usuario':

// ==> Rota responsável por criar um novo 'Usuario': (POST): localhost:3001/api/usuario
router.post("/usuario", usuarioController.createUsuario);
// ==> Rota responsável por listar todos os 'Usuarios': (GET): localhost:3001/api/usuario
router.get("/usuario", usuarioController.listAllUsuario);
// ==> Rota responsável por selecionar 'Usuarios' pelo 'Id': (GET): localhost:3001/api/usuario/:id
router.get("/usuario/:id", usuarioController.findUsuarioById);
// ==> Rota responsável por atualizar 'Usuarios' pelo 'Id': (PUT): localhost: 3001/api/usuario/:id
router.put("/usuario/:id", usuarioController.updateUsuarioById);
// ==> Rota responsável por excluir 'Usuarios' pelo 'Id': (DELETE): localhost:3001/api/usuario/:id
router.delete("/usuario/:id", usuarioController.deleteUsuarioById);
router.post("/usuario/login", usuarioController.login);
router.post("/usuario/logout", usuarioController.logout);

module.exports = router;
