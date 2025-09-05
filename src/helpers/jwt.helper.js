import jwt from "jsonwebtoken";

// Generar un token JWT
export const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

// Verificar un token JWT
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null; // Devuelve null si el token no es válido
  }
};

export default { generateToken, verifyToken };