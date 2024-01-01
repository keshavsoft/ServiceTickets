import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    dialectOptions: {
        // Your sqlite3 options here
    }
});

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});

const user = new User({ firstName: "KeshavSoft" });

console.log(User === sequelize.models.User, user.firstName);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}