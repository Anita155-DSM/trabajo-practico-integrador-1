import { ProfileModel, UserModel } from "../models/index.js";

export const createProfile = async (req, res) => {
  try {
    const { user_id, first_name, last_name, biography, avatar_url, birth_date } = req.body;
    const profile = await ProfileModel.create({
      user_id,
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