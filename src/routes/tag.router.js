import { Router } from "express";
import { createTag, getTags } from "../controllers/tag.controllers.js";
import { authMiddleware, authAdminMiddleware } from "../middlewares/authMiddleware.js";

const routerTag = Router();

// Crear tag (solo admin)
routerTag.post("/", authMiddleware, authAdminMiddleware, createTag);

// Ver todos los tags (cualquiera logueado)
routerTag.get("/", authMiddleware, getTags);

export default routerTag;
//rutas de tags: crear tag (solo admin), ver todos (cualquiera logueado)