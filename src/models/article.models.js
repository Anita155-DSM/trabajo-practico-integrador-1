import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ArticleModel = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  excerpt: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('published', 'archived'),
    defaultValue: 'published',
    allowNull: false
  }
},{
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default ArticleModel;