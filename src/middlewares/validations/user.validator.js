import { body, param } from 'express-validator';
import { User } from '../../models/user.models.js';

//ESTE ES PARA VALIDAR EL CUERPO DE LA PETICION EN RUTAS QUE LO REQUIERAN
export const userValidation = [
    body('username')
        .notEmpty().withMessage('El nombre de usuario es obligatorio')
        .isLength({ min: 3, max: 20 }).withMessage('Debe tener entre 3 y 20 caracteres')
        .custom(async (value) => {
            const existUser = await User.findOne({ username: value });
            if (existUser) {
                throw new Error('El nombre de usuario ya está en uso');
            }
            return true;
        }),

    body('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido')
        .custom(async (value) => {
            const existEmail = await User.findOne({ email: value });
            if (existEmail) {
                throw new Error('El email ya está en uso');
            }
            return true;
        }),

    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 8 }).withMessage('Debe tener al menos 8 caracteres')
];

//ESTE ES PARA VALIDAR EL PARAMETRO ID EN RUTAS QUE LO REQUIERAN
export const userIdParamValidation = [
    param('id')
        .isInt().withMessage('El ID debe ser un número entero')
        .custom(async (value) => {
            const existUser = await User.findByPk(value);
            if (!existUser) {
                throw new Error('El usuario no existe');
            }
            return true;
        }),
];

export default { userValidation, userIdParamValidation };