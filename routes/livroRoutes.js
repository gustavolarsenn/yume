const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/livroController'); // Importe o controlador de livro

router.post('/livros', LivroController.criarLivro);
router.get('/livros', LivroController.listarLivros);
router.get('/livros/:id', LivroController.obterLivroPorId);
router.put('/livros/:id', LivroController.atualizarLivro);
router.delete('/livros/:id', LivroController.excluirLivro);

module.exports = router;
