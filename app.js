import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './src/config/database.js';
//modelos solo de prueba de generacion de tablas
import './src/models/index.js';
import cookieParser from "cookie-parser";

//rutas importaciones
import routerAuth from "./src/routes/auth.router.js";
import routerUser from './src/routes/user.router.js';
import routerProfile from './src/routes/profile.router.js';
import routerArticle from './src/routes/article.router.js';
import routerTag from './src/routes/tag.router.js';
import routerArticleTag from './src/routes/article_tag.router.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({                         //esto sacado de la documentacion del profe
origin: "http://localhost:5173",
credentials: true // CRUCIAL: permitir cookies
}));
app.use(cookieParser()); // NECESARIO: para leer req.cookies

// Rutas
app.use('/api/auth', routerAuth);
app.use('/api/users', routerUser);
app.use('/api/profiles', routerProfile);
app.use('/api/articles', routerArticle);
app.use('/api/tags', routerTag);
app.use('/api/article-tags', routerArticleTag);

// Conexión a la base de datos y sincronización de modelos

sequelize.authenticate().then(() => {
  console.log('Conexión a la base de datos establecida');
  return sequelize.sync(); //el force saco cuando termino el tp: sequelize.sync({ force: true })
}).then(() => {
  app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

