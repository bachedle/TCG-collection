const { Sequelize } = require('sequelize');


//ket noi database
const sequelize = new Sequelize('tcg_test', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

//khai bao ham connection
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connection;