import { ProfileModel, UserModel } from "../models/index.js";

// Crear perfil (usando el usuario autenticado)
export const createProfile = async (req, res) => {
  try {
    const { first_name, last_name, biography, avatar_url, birth_date } = req.body;

    // Validar si ya existe un perfil para este usuario
    const existingProfile = await ProfileModel.findOne({ where: { user_id: req.user.id } });
    if (existingProfile) {
      return res.status(400).json({ error: "El usuario ya tiene un perfil creado" });
    }

    const profile = await ProfileModel.create({
      user_id: req.user.id, // tomado del token, no del body
      first_name,
      last_name,
      biography,
      avatar_url,
      birth_date
    });

    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Error creando perfil" });
  }
};

// Obtener todos los perfiles (solo para admins en general)
export const getProfiles = async (req, res) => {
  try {
    const profiles = await ProfileModel.findAll({
      include: [{ model: UserModel, as: "user" }]
    });
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo perfiles" });
  }
};
// Obtener perfil por ID
export const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await ProfileModel.findByPk(id, {
      include: [{ model: UserModel, as: "user" }]
    });

    if (!profile) {
      return res.status(404).json({ error: "Perfil no encontrado" });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil" });
  }
};

// Eliminar perfil
export const deleteProfile = async (req, res) => {
  try {
    const deleted = await ProfileModel.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Perfil no encontrado" });
    res.json({ msg: "Perfil eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error eliminando perfil" });
  }
};
