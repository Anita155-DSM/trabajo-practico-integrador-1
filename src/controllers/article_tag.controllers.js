import { ArticleTag } from "../models/article_tag.models.js";

export const createArticleTag = async (req, res) => {
  try {
    const relation = await ArticleTag.create(req.body);
    res.status(201).json(relation);
  } catch (err) {
    res.status(500).json({ error: "Error al asociar artículo con tag" });
  }
};

export const deleteArticleTag = async (req, res) => {
  try {
    const relation = await ArticleTag.findByPk(req.params.id);
    if (!relation) return res.status(404).json({ error: "Relación no encontrada" });

    await relation.destroy();
    res.json({ message: "Relación eliminada" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar relación" });
  }
};