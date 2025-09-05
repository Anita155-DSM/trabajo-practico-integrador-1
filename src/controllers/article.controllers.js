import { ArticleModel, UserModel, TagModel } from "../models/index.js";

export const createArticle = async (req, res) => {
  try {
    const { title, content, excerpt, status, tagIds } = req.body;
    const article = await ArticleModel.create({
      title,
      content,
      excerpt,
      status,
      user_id: req.user.id
    });

    if (tagIds && tagIds.length > 0) {
      await article.setTags(tagIds); // método mágico de Sequelize
    }

    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: "Error creando artículo" });
  }
};

export const getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.findAll({
      include: [
        { model: UserModel, as: "author" },
        { model: TagModel, as: "tags" }
      ]
    });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo artículos" });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id, {
      include: [
        { model: UserModel, as: "author" },
        { model: TagModel, as: "tags" }
      ]
    });
    if (!article) return res.status(404).json({ error: "Artículo no encontrado" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo artículo" });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Artículo no encontrado" });

    await article.update(req.body);

    if (req.body.tagIds) {
      await article.setTags(req.body.tagIds);
    }

    res.json(article);
  } catch (err) {
    res.status(500).json({ error: "Error actualizando artículo" });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const deleted = await ArticleModel.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Artículo no encontrado" });
    res.json({ msg: "Artículo eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error eliminando artículo" });
  }
};