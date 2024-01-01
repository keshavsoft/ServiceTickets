import { Sequelize, DataTypes } from "sequelize";

// Create a Sequelize instance and connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // You can specify the path for your SQLite database file
});

// Define a model (a table in the database)
const Customer = sequelize.define('Customer', {
  // Define columns in the Customer table
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Synchronize the model with the database (create the Customer table if not exists)
sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });
