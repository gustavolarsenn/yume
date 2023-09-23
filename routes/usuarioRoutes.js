const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController'); // Importe o controlador de usuário

router.post('/usuarios', UsuarioController.criarUsuario);
router.get('/usuarios', UsuarioController.listarUsuarios);
router.get('/usuarios/:id', UsuarioController.obterUsuarioPorId);
router.patch('/usuarios/:id', UsuarioController.atualizarUsuario);
router.delete('/usuarios/:id', UsuarioController.excluirUsuario);

module.exports = router;
