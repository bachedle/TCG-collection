const { Sequelize } = require('sequelize');


//ket noi database
//lay info ben configjson
const sequelize = new Sequelize('postgresql://tcg_db_9q2c_user:6Bdl9JLYL2GBl84DwxjkqwJacE2Bn3rB@dpg-ct5hinrv2p9s73900b10-a.oregon-postgres.render.com/tcg_db_9q2c?ssl=true',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {}, //removed ssl
    }
);

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