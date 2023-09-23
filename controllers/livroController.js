const Livro = require('../models/Livro'); // Importe o modelo de livro

module.exports = {
  criarLivro: (req, res) => {
    const novoLivroData = req.body;

    Livro.create(novoLivroData, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao criar livro', details: error.message });
      }
      return res.status(201).json({ message: mensagem });
    });
  },

  listarLivros: (req, res) => {
    Livro.getAll((error, livros) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar livros', details: error.message });
      }
      return res.status(200).json(livros);
    });
  },

  obterLivroPorId: (req, res) => {
    const livroId = req.params.id;

    Livro.getById(livroId, (error, livro) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar livro', details: error.message });
      }
      if (!livro) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }
      return res.status(200).json(livro);
    });
  },

  atualizarLivro: (req, res) => {
    const livroId = req.params.id;
    const livroData = req.body;

    Livro.update(livroId, livroData, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao atualizar livro', details: error.message });
      }
      return res.status(200).json({ message: mensagem });
    });
  },

  excluirLivro: (req, res) => {
    const livroId = req.params.id;

    Livro.delete(livroId, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao excluir livro', details: error.message });
      }
      return res.status(200).json({ message: mensagem });
    });
  },
};
