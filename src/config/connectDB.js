const { Sequelize } = require('sequelize');


//ket noi database
//lay info ben configjson
const sequelize = new Sequelize('tcg_db_9q2c', 'tcg_db_9q2c_user', '6Bdl9JLYL2GBl84DwxjkqwJacE2Bn3rB', {
    host: 'dpg-ct5hinrv2p9s73900b10-a.oregon-postgres.render.com',
    port: 5432,
    dialect: 'postgres',
    logging:false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
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