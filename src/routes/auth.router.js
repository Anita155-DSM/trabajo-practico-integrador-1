import { Router } from "express";
import { register, login, profile, logout } from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const routerAuth = Router();

// rutas públicas
routerAuth.post("/register", register);
routerAuth.post("/login", login);

// rutas privadas
routerAuth.get("/profile", authMiddleware, profile);
routerAuth.post("/logout", authMiddleware, logout);

export default routerAuth;