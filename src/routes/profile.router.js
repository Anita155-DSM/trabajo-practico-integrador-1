import { Router } from "express";
import { createProfile, getProfiles } from "../controllers/profile.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const routerProfile = Router();

// Cualquier usuario logueado puede crear su perfil
routerProfile.post("/", authMiddleware, createProfile);

// Admin puede ver todos los perfiles
routerProfile.get("/", authMiddleware, getProfiles);

export default routerProfile;
//rutas de perfiles: crear perfil, ver todos los perfiles (solo admin)