import { Sequelize, DataTypes } from "sequelize";
import { ForExistence as ForExistenceCheckFile } from '../../CheckJsonFolder.js';






let StartFunc = async () => {

    let LocalFromCheck = ForExistenceCheckFile();

    let LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/database.sqlite`;
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `${LocalReturnData.UserDataFilePath}`, // You can specify the path for your SQLite database file
    });

    const Customer = sequelize.define('Customer', {
        // Define columns in the Customer table
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

    let customers = await Customer.findAll()
    return customers.map(customer => {
        console.log('Database and tables created!', customer.toJSON());
        return customer.toJSON()
    });
};

export { StartFunc };