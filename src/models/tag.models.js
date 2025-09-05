import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TagModel = sequelize.define('Tag', {
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  }
},{
  timestamps: true,
  paranoid: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default TagModel;