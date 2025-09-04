import { body, param } from 'express-validator';

export const tagValidation = [
    body('name')
        .notEmpty().withMessage('El nombre del tag es obligatorio')
        .isLength({ max: 30 }).withMessage('No puede superar los 30 caracteres'),
];
