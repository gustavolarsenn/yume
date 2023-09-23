const express = require('express');
const router = express.Router();
const GeneroController = require('../controllers/generoController'); // Importe o controlador de gênero

router.post('/generos', GeneroController.criarGenero);
router.get('/generos', GeneroController.listarGeneros);
router.get('/generos/:id', GeneroController.obterGeneroPorId);
router.put('/generos/:id', GeneroController.atualizarGenero);
router.delete('/generos/:id', GeneroController.excluirGenero);

module.exports = router;
