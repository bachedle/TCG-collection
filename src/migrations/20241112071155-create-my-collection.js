'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MyCollections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        }
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MyCollections');
  }
};