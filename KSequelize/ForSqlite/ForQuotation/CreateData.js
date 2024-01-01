import { Sequelize, DataTypes } from "sequelize";

let StartFunc = async () => {

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `database.sqlite`, // You can specify the path for your SQLite database file
    });

    const Customer = sequelize.define('Customers', {
        // Define columns in the Customer table
        CustomerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CustomerContact: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

    const Items = sequelize.define('Items', {
        // Define columns in the Customer table
        ItemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ItemRate: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

    const Orders = sequelize.define('Orders', {
        // Define columns in the Customer table
        ItemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ItemRate: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );
    sequelize.sync({ force: true });

};
StartFunc();

// export { StartFunc };