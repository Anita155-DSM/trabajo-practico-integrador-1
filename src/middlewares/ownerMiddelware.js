import ArticleModel from "../models/article.models.js";

export const authOwnerMiddleware = async (req, res, next) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: "Artículo no encontrado" });

    // Si no es dueño ni admin, prohibido
    if (article.user_id !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "No autorizado" });
    }

    next();
  } catch (err) {
    res.status(500).json({ error: "Error de autorización" });
  }
};

export default authOwnerMiddleware;
