import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('YOUR_DB_NAME', 'YOUR_DB_USERNAME', 'YOUR_DB_PASSWORD', {
  host: 'YOUR_HOST', // Update with your host
  dialect: 'postgres',
});

export const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
