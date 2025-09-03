import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Article_Tag = sequelize.define('ArticleTag', {
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Article_Tag;