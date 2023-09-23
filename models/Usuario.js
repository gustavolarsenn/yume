const {database} = require('../server');

const usuariosRef = database.ref('usuarios');

const Usuario = {
    create: (usuarioData, callback) => {
      try {
        usuariosRef.push(usuarioData, (error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, 'Usuário criado com sucesso');
          }
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    getAll: (callback) => {
      try {
        usuariosRef.once('value', (snapshot) => {
          const usuarios = snapshot.val();
          callback(null, usuarios);
        }, (error) => {
          callback(error, null);
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    getById: (userId, callback) => {
      try {
        usuariosRef.child(userId).once('value', (snapshot) => {
          const usuario = snapshot.val();
          callback(null, usuario);
        }, (error) => {
          callback(error, null);
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    update: (userId, usuarioData, callback) => {
      try {
        usuariosRef.child(userId).update(usuarioData, (error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, 'Usuário atualizado com sucesso');
          }
        });
      } catch (error) {
        callback(error, null);
      }
    },
  
    delete: (userId, callback) => {
      try {
        usuariosRef.child(userId).remove((error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, 'Usuário excluído com sucesso');
          }
        });
      } catch (error) {
        callback(error, null);
      }
    },
  };
  
  module.exports = Usuario;