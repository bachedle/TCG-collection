'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cards', 
      [
        {
          cardName: 'Blue Eyes White Dragon',
          cardType: 'Monster',
          cardRarity: 'Common',
          quantity: 1
        },
        {
          cardName: 'Slifer the Sky Dragon',
          cardType: 'Monster',
          cardRarity: 'Common',
          quantity: 1
        },
        {
          cardName: 'The Winged Dragon of Ra',
          cardType: 'Monster',
          cardRarity: 'Common',
          quantity: 1
        },
        {
          cardName: 'Exodia the Forbidden One',
          cardType: 'Monster',
          cardRarity: 'Common',
          quantity: 1
        },
        {
          cardName: 'The Phantom Knights of Break Sword',
          cardType: 'Monster',
          cardRarity: 'Common',
          quantity: 1
        }
      ]
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
