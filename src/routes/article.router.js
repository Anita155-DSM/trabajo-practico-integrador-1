import { Router } from "express";
import { 
  createArticle, 
  getArticles, 
  getArticleById, 
  updateArticle, 
  deleteArticle 
} from "../controllers/article.controllers.js";
import { authMiddleware, authAdminMiddleware } from "../middlewares/authMiddleware.js";
import authOwnerMiddleware from "../middlewares/ownerMiddelware.js";

const routerArticle = Router();
//HY QUE RECORDAR
// Ver todos los artículos (cualquiera logueado)
routerArticle.get("/", authMiddleware, getArticles);

// Ver artículo por ID
routerArticle.get("/:id", authMiddleware, getArticleById);

// Crear artículo (solo logueado)
routerArticle.post("/", authMiddleware, createArticle);

// Editar artículo (dueño o admin)
routerArticle.put("/:id", authMiddleware, authOwnerMiddleware, updateArticle);

// Borrar artículo (dueño o admin)
routerArticle.delete("/:id", authMiddleware, authOwnerMiddleware, deleteArticle);

export default routerArticle;
//rutas de artículos: ver todos, ver por id, crear, editar, borrar (con permisos)