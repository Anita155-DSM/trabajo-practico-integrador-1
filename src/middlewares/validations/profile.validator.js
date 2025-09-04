import { body } from 'express-validator';
//ESTE ES PARA VALIDAR EL CUERPO DE LA PETICION EN RUTAS QUE LO REQUIERAN
export const profileValidation = [
    body('first_name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 2, max: 50 }).withMessage('Debe tener entre 2 y 50 caracteres'),
    body('last_name')
        .notEmpty().withMessage('El apellido es obligatorio')
        .isLength({ min: 2, max: 50 }).withMessage('Debe tener entre 2 y 50 caracteres'),
    body('bio')
        .optional()
        .isLength({ max: 200 }).withMessage('La biografía no puede superar los 200 caracteres'),
    body('avatar_url')
        .optional()
        .isURL().withMessage('Debe ser una URL válida'),
    body('birth_date')
        .optional()
        .isDate().withMessage('Debe ser una fecha válida')
];
