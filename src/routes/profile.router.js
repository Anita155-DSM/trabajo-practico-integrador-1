import { Router } from "express";
import { createProfile, getProfiles, getProfileById, deleteProfile } from "../controllers/profile.controllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const routerProfile = Router();

// Cualquier usuario logueado puede crear su perfil
routerProfile.post("/", authMiddleware, createProfile);

// Admin puede ver todos los perfiles
routerProfile.get("/", authMiddleware, getProfiles);
//perfil por id
routerProfile.get("/:id", authMiddleware, getProfileById);
//delete perfil
routerProfile.delete("/:id", authMiddleware, deleteProfile);

export default routerProfile;
//rutas de perfiles: crear perfil, ver todos los perfiles (solo admin), ver perfil por id, borrar perfil