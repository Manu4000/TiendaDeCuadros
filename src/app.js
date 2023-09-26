const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes'); // Importa las rutas de autenticación
const userRoutes = require('./src/routes/userRoutes'); // Importa las rutas de usuario

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB.');
});

// Configura las rutas
app.use('/auth', authRoutes); // Rutas de autenticación
app.use('/user', userRoutes); // Rutas de usuario

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
