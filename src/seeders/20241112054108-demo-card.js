'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cards', [{
      cardName: 'blue-eyes white dragon',
      cardType: 'Monster',
      cardRarity: 'Rare'
    },
    {
      cardName: 'exodia the forbidden one',
      cardType: 'Monster',
      cardRarity: 'Ultra Rare'
    },
    {
      cardName: 'black luster soldier',
      cardType: 'Monster',
      cardRarity: 'Super Rare'
    },
    {
      cardName: 'elemental hero fire deck',
      cardType: 'Monster',
      cardRarity: 'Common'
    },
    {
      cardName: 'the phantom knights of the midnight sky',
      cardType: 'Monster',
      cardRarity: 'Common'
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
