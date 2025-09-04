import { body, param } from 'express-validator';
import { Article } from '../../models/article.models.js';

export const articleValidation = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isLength({ min: 3, max: 200 }).withMessage('El título debe tener entre 3 y 200 caracteres'),
    body('content')
        .notEmpty().withMessage('El contenido es obligatorio')
        .isLength({ min: 50 }).withMessage('El contenido debe tener al menos 50 caracteres'),
    body('excerpt')
        .optional()
        .isLength({ max: 500 }).withMessage('El extracto debe tener como máximo 500 caracteres'),
    body('status')
        .optional()
        .isIn(['archived', 'published']).withMessage('El estado debe ser "archived" o "published"'),
    body('user_id')
        .notEmpty().withMessage('Debe asociarse un usuario')
        .isInt().withMessage('El ID de usuario debe ser un número entero')
];

export const articleIdParamValidation = [
    param('id')
        .isInt().withMessage('El ID del artículo debe ser un número entero')
        .custom(async (value) => {
            const articleExists = await Article.findByPk(value);
            if (!articleExists) throw new Error('Artículo no encontrado');
            return true;
        })
];

export default { articleValidation, articleIdParamValidation };