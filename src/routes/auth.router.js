import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controllers.js";

const routerAuth = Router();

routerAuth.post("/register", register);
routerAuth.post("/login", login);
routerAuth.post("/logout", logout);

export default routerAuth;
//rutas de autenticacion: registro, login, logout