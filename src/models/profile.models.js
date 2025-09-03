import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProfileModel = sequelize.define('Profile', {
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  biography: {
    type: DataTypes.STRING(255)
  },
  avatar_url: {
    type: DataTypes.STRING(255)
  },
  birth_date: {
    type: DataTypes.DATE
  }
},{
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default ProfileModel;