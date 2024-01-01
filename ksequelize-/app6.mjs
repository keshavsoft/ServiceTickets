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
  }
}, { freezeTableName: true }
);

let StartFunc = async () => {
  // await sequelize.sync();
  let customers = await Customer.findAll()
  customers.forEach(customer => {
    console.log('Database and tables created!', customer.toJSON());

  });

};

StartFunc().then();
