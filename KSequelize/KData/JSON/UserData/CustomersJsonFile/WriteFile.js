import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // You can specify the path for your SQLite database file
});

const Customer = sequelize.define('Customer', {
    // Define columns in the Customer table
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { freezeTableName: true }
);

let StartFunc = async () => {
    let customers = await Customer.findAll()
    return customers.map(customer => {
        console.log('Database and tables created!', customer.toJSON());
        return customer.toJSON()
    });
};

export { StartFunc };