import { TagModel, ArticleModel } from "../models/index.js";

export const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await TagModel.create({ name });
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json({ error: "Error creando tag" });
  }
};

export const getTags = async (req, res) => {
  try {
    const tags = await TagModel.findAll({
      include: [{ model: ArticleModel, as: "articles" }]
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo tags" });
  }
};