import jwt from "jsonwebtoken";

// Verifica que el usuario esté logueado
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "No autorizado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
};

// Verifica que sea admin
export const authAdminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Acceso solo para admins" });
  }
  next();
};

export default { authMiddleware, authAdminMiddleware };
