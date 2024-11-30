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
          model: 'Cards',
          key: 'id',
        },
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
        }
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      cardRarity: {
        type: Sequelize.STRING
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