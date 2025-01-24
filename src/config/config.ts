import { Dialect } from 'sequelize';

export interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

const development: DBConfig = {
  username: "YOUR_DB_USERNAME",
  password: "YOUR_DB_PASSWORD",
  database: "YOUR_DB_NAME",
  host: "YOUR_HOST",
  dialect: "DIALECT",
};

export default {
  development,
};