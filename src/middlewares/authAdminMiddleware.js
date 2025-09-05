// authAdminMiddleware.js
export const authAdminMiddleware = (req, res, next) => {
  // Verifica que exista usuario en la request
  if (!req.user) {
    return res.status(401).json({ error: "No autorizado" });
  }

  // Solo los usuarios con rol "admin" pueden pasar
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Acceso solo para admins" });
  }

  next();
};
export default authAdminMiddleware;
