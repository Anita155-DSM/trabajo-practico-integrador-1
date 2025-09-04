import { body } from 'express-validator';
import { Article } from '../models/article.models.js';
import { Tag } from '../models/tag.models.js';

export const articleTagValidation = [
  body('article_id')
    .notEmpty().withMessage('Debe indicarse el artículo')
    .isInt().withMessage('El ID del artículo debe ser un número entero')
    .custom(async (value) => {
      const articleExists = await Article.findByPk(value);
      if (!articleExists) throw new Error('Artículo no encontrado');
      return true;
    }),

  body('tag_id')
    .notEmpty().withMessage('Debe indicarse el tag')
    .isInt().withMessage('El ID del tag debe ser un número entero')
    .custom(async (value) => {
      const tagExists = await Tag.findByPk(value);
      if (!tagExists) throw new Error('Tag no encontrado');
      return true;
    })
];
