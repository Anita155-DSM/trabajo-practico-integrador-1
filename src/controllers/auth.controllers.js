import UserModel from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Registrar usuario
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // verificar si existe el email
    const existe = await UserModel.findOne({ where: { email } });
    if (existe) return res.status(400).json({ error: "El email ya está en uso" });

    // encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuario registrado", user });
  } catch (error) {
    res.status(500).json({ error: "Error en el registro" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

    const valido = await bcrypt.compare(password, user.password);
    if (!valido) return res.status(400).json({ error: "Contraseña incorrecta" });

    // crear token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // guardar token en cookie
    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Login correcto" });
  } catch (error) {
    res.status(500).json({ error: "Error en el login" });
  }
};

// Perfil
export const profile = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.user.id, {
      attributes: ["id", "username", "email", "role"],
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener perfil" });
  }
};

// Logout
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sesión cerrada" });
};
