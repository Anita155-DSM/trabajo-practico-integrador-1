import ProfileModel from "../models/profile.models.js";

export const createProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Error al crear perfil" });
  }
};

export const getProfiles = async (req, res) => {
  const profiles = await ProfileModel.findAll();
  res.json(profiles);
};
