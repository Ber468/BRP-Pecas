const router = require('express-promise-router')();
const pecaController = require('../controllers/peca.controller');

// ==> Definindo as rotas do CRUD - 'Peca':

// ==> Rota responsável por criar um novo 'Peca': (POST): localhost:3001/api/peca
router.post('/peca', pecaController.createPeca);
// ==> Rota responsável por listar todas as 'Pecas': (GET): localhost:3001/api/peca
router.get('/peca', pecaController.listAllPeca);
// ==> Rota responsável por selecionar 'Pecas' pelo 'Id': (GET): localhost:3001/api/peca/:id
router.get('/peca/:id', pecaController.findPecaById);
// ==> Rota responsável por atualizar 'Pecas' pelo 'Id': (PUT): localhost: 3001/api/peca/:id
router.put('/peca/:id', pecaController.updatePecaById);
// ==> Rota responsável por excluir 'Pecas' pelo 'Id': (DELETE): localhost:3001/api/peca/:id
router.delete('/peca/:id', pecaController.deletePecaById);

module.exports = router;