import app from './app';
import sequelize, { testDatabaseConnection } from './config/database';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await testDatabaseConnection(); // Test DB connection
    // Start your Express app here
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
  };
  
  startServer();