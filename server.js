const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const firebase = require('firebase-admin');
const serviceAccount = require('./credentials.json'); 

const firebaseConfig = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://tabelasapp-4a190-default-rtdb.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

module.exports = { database };

const usuarioRoutes = require('./routes/usuarioRoutes');
const livroRoutes = require('./routes/livroRoutes');
const generoRoutes = require('./routes/generoRoutes');

app.use('/models/Usuarios', usuarioRoutes);
app.use('/models/Livros', livroRoutes);
app.use('/models/Generos', generoRoutes);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080!');
})

app.use(usuarioRoutes, livroRoutes, generoRoutes)