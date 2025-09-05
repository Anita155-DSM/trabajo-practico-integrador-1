import { Router } from "express";
import { getUsers, getUserById, deleteUser } from "../controllers/user.controllers.js";
import { authMiddleware, authAdminMiddleware } from "../middlewares/authMiddleware.js";

const routerUser = Router();

// Solo admin puede ver todos los usuarios
routerUser.get("/", authMiddleware, authAdminMiddleware, getUsers);

// Solo admin puede ver usuarios individuales
routerUser.get("/:id", authMiddleware, authAdminMiddleware, getUserById);

// Solo admin puede borrar
routerUser.delete("/:id", authMiddleware, authAdminMiddleware, deleteUser);

export default routerUser;