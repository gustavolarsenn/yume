const Genero = require('../models/Genero'); // Importe o modelo de gênero

module.exports = {
  criarGenero: (req, res) => {
    const novoGeneroData = req.body;

    Genero.create(novoGeneroData, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao criar gênero', details: error.message });
      }
      return res.status(201).json({ message: mensagem });
    });
  },

  listarGeneros: (req, res) => {
    Genero.getAll((error, generos) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar gêneros', details: error.message });
      }
      return res.status(200).json(generos);
    });
  },

  obterGeneroPorId: (req, res) => {
    const generoId = req.params.id;

    Genero.getById(generoId, (error, genero) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao buscar gênero', details: error.message });
      }
      if (!genero) {
        return res.status(404).json({ message: 'Gênero não encontrado' });
      }
      return res.status(200).json(genero);
    });
  },

  atualizarGenero: (req, res) => {
    const generoId = req.params.id;
    const generoData = req.body;

    Genero.update(generoId, generoData, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao atualizar gênero', details: error.message });
      }
      return res.status(200).json({ message: mensagem });
    });
  },

  excluirGenero: (req, res) => {
    const generoId = req.params.id;

    Genero.delete(generoId, (error, mensagem) => {
      if (error) {
        return res.status(500).json({ error: 'Erro ao excluir gênero', details: error.message });
      }
      return res.status(200).json({ message: mensagem });
    });
  },
};
