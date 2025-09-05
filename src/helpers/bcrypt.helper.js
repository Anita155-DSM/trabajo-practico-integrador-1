import bcrypt from "bcrypt";

// Hashear contraseña
export const hashPassword = async (password) => {
  const saltRounds = 10; // Entre 10 y 12 es recomendable
  return await bcrypt.hash(password, saltRounds);
};

// Comparar contraseña con hash
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export default { hashPassword, comparePassword };
