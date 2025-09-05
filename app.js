import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';
//modelos solo de prueba de generacion de tablas
import './src/models/index.js';
import cookieParser from "cookie-parser";
import routerAuth from "./src/routes/auth.router.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cookieParser());

//futuras rutas
// Rutas
app.use('/api/auth', routerAuth);

// Conexión a la base de datos y sincronización de modelos

sequelize.authenticate().then(() => {
  console.log('Conexión a la base de datos establecida');
  return sequelize.sync({ force: true });
}).then(() => {
  app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

