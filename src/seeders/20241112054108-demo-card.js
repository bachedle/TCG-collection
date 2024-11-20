'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cards', [{
      cardName: 'blue-eyes white dragon',
      cardType: 'Monster',
      cardRarity: 'Rare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cardName: 'exodia the forbidden one',
      cardType: 'Monster',
      cardRarity: 'Ultra Rare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cardName: 'black luster soldier',
      cardType: 'Monster',
      cardRarity: 'Super Rare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cardName: 'elemental hero fire deck',
      cardType: 'Monster',
      cardRarity: 'Common',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cardName: 'the phantom knights of the midnight sky',
      cardType: 'Monster',
      cardRarity: 'Common',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
