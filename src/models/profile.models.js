import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProfileModel = sequelize.define('Profile', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  avatar_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at'
});

export default ProfileModel;