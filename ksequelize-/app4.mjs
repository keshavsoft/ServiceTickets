// Import required modules
import { Sequelize, DataTypes } from "sequelize";

// Create a Sequelize instance and connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // You can specify the path for your SQLite database file
});

// Define a model (a table in the database)
const User = sequelize.define('User', {
  // Define columns in the User table
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

// Synchronize the model with the database (create the User table if not exists)
sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });

// Example usage: Create a new user
User.create({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
})
  .then((user) => {
    console.log('User created:', user.toJSON());
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });

// Example usage: Query all users
User.findAll()
  .then((users) => {
    console.log('All users:', users.map((user) => user.toJSON()));
  })
  .catch((error) => {
    console.error('Error querying users:', error);
  });
