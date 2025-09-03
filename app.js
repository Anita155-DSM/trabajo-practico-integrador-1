import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';
//modelos solo de prueba de generacion de tablas
//import './src/models/user.models.js';
//import './src/models/profile.models.js';
//import './src/models/article.models.js';
//import './src/models/tag.models.js';
//import './src/models/article_tag.models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


sequelize.authenticate().then(() => {
  console.log('Conexión a la base de datos establecida');
//  return sequelize.sync({ alter: true });
  app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

app.get('/', (req, res) => {
  res.send('SERVIDOR ARRIBA');
});
