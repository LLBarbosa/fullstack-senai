const express = require('express');
const router = express.Router();

const usuariosController = require(`../controllers/usuariosController`);
const middleware = require('../middleware/usuariosMiddleware');

// exercício 6 - criando rotas da aplicação
router.get('/usuarios', usuariosController.getAll);
router.get('/usuarios/:id', usuariosController.getOne);
router.post('/usuarios', middleware.validateRole, usuariosController.addUser);
router.delete('/usuarios/:id', usuariosController.deleteUser);


module.exports = router;