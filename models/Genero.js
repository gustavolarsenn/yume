const {database} = require('../server');

const generosRef = database.ref('generos');

const Genero = {
    create: (generoData, callback) => {
      try {
        generosRef.push(generoData, (error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, 'Gênero criado com sucesso');
          }
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    getAll: (callback) => {
      try {
        generosRef.once('value', (snapshot) => {
          const generos = snapshot.val();
          callback(null, generos);
        }, (error) => {
          callback(error, null);
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    getById: (generoId, callback) => {
      try {
        generosRef.child(generoId).once('value', (snapshot) => {
          const genero = snapshot.val();
          callback(null, genero);
        }, (error) => {
          callback(error, null);
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    update: (generoId, generoData, callback) => {
      try {
        generosRef.child(generoId).update(generoData, (error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, 'Gênero atualizado com sucesso');
          }
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    delete: (generoId, callback) => {
      try {
        generosRef.child(generoId).remove((error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, 'Gênero excluído com sucesso');
          }
        });
      } catch (error) {
        callback(error, null);
      }
    },
  };
  
  module.exports = Genero;