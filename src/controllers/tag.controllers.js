import TagModel from "../models/tag.models.js";

export const createTag = async (req, res) => {
  try {
    const tag = await TagModel.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json({ error: "Error al crear tag" });
  }
};

export const getTags = async (req, res) => {
  try {
    const tags = await TagModel.findAll();
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener tags" });
  }
};

export const getTagById = async (req, res) => {
  try {
    const tag = await TagModel.findByPk(req.params.id);
    if (!tag) return res.status(404).json({ error: "Tag no encontrado" });
    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener tag" });
  }
};

export const updateTag = async (req, res) => {
  try {
    const tag = await TagModel.findByPk(req.params.id);
    if (!tag) return res.status(404).json({ error: "Tag no encontrado" });

    await TagModel.update(req.body);
    res.json(TagModel);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar tag" });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const tag = await TagModel.findByPk(req.params.id);
    if (!tag) return res.status(404).json({ error: "Tag no encontrado" });

    await TagModel.destroy();
    res.json({ message: "Tag eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar tag" });
  }
};
