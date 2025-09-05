import ArticleModel from "../models/article.models.js";

export const createArticle = async (req, res) => {
  try {
    const article = await ArticleModel.create({ ...req.body, user_id: req.user.id });
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: "Error al crear artículo" });
  }
};

export const getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.findAll();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener artículos" });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Artículo no encontrado" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener artículo" });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Artículo no encontrado" });

    await ArticleModel.update(req.body);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar artículo" });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Artículo no encontrado" });

    await ArticleModel.destroy();
    res.json({ message: "Artículo eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar artículo" });
  }
};
