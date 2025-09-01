import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


sequelize.authenticate().then(() => {
  console.log('Conexión a la base de datos establecida');
  app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

app.get('/', (req, res) => {
  res.send('SERVIDOR ARRIBA');
});
