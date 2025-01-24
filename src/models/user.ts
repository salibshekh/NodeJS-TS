import { Sequelize, DataTypes, ModelStatic } from 'sequelize';
import sequelize from '../utils/sequelize';

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const UserModel = (sequelizeInstance: Sequelize): ModelStatic<any> =>
  sequelizeInstance.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'user', // Explicitly define the table name as 'user'
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
  });
