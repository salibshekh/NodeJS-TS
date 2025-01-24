import { Sequelize, DataTypes, ModelStatic } from 'sequelize';

export interface PostAttributes {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export const PostModel = (sequelizeInstance: Sequelize): ModelStatic<any> =>
  sequelizeInstance.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'post', // Explicitly define the table name as 'user'
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
  });
