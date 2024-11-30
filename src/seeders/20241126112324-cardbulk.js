'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cards', [
      {
        cardName: 'Pikachu EX',
        cardType: 'Basic',
        cardRarity: 'Gold'
      },
      {
        cardName: 'Alolan Exeggutor EX',
        cardType: 'Stage 1',
        cardRarity: 'Gold'
      },
      {
        cardName: 'Counter Gain',
        cardType: 'Trainer',
        cardRarity: 'Gold'
      },
      {
        cardName: 'Gravity Mountain',
        cardType: 'Trainer',
        cardRarity: 'Gold'
      },
      {
        cardName: 'Night Stretcher',
        cardType: 'Trainer',
        cardRarity: 'Gold'
      },
      {
        cardName: 'Jet Energy',
        cardType: 'Energy',
        cardRarity: 'Gold'
      },
      {
        cardName: 'Durant EX',
        cardType: 'Basic',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Milotic EX',
        cardType: 'Stage 1',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Pikachu EX',
        cardType: 'Basic',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Latias EX',
        cardType: 'Basic',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Hydreigon EX',
        cardType: 'Stage 2',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Archaludon EX',
        cardType: 'Stage 1',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Alolan Exeggutor EX',
        cardType: 'Stage 1',
        cardRarity: 'Special Illustration'
      },
      {
        cardName: 'Durant EX',
        cardType: 'Basic',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Scovillain EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Milotic EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Black Kyurem EX',
        cardType: 'Basic',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Pikachu EX',
        cardType: 'Basic',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Latias EX',
        cardType: 'Basic',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Palossand EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Flygon EX',
        cardType: 'Stage 2',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Hydreigon EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Archaludon EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Alolan Exeggutor EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Tatsugiri EX',
        cardType: 'Stage 2',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Slaking EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Cyclizar EX',
        cardType: 'Stage 1',
        cardRarity: 'Full Art'
      },
      {
        cardName: 'Exeggcute',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Vivillon',
        cardType: 'Stage 2',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Shiinotic',
        cardType: 'Stage 1',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Castform',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Larvesta',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Ceruledge',
        cardType: 'Stage 1',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Feebas',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Spheal',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Bruxish',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Cetitan',
        cardType: 'Stage 1',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Stunfisk',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Latios',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Mesprit',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Phanpy',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Vibrava',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Clobbopus',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Dugtrio',
        cardType: 'Stage 1',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Skarmory',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Flapple',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Appletun',
        cardType: 'Stage 1',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Slakoth',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Kecleon',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      },
      {
        cardName: 'Braviary',
        cardType: 'Basic',
        cardRarity: 'Illustration Rare'
      }
      // {
      //   cardName: 'Vivillon',
      //   cardType: 'Stage 2',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Morelull',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Shiinotic',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Dhelmise',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Zarude',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Capsakid',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Centiskorch',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Fuecoco',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Crocalor',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Skeledirge',
      //   cardType: 'Stage 2',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Charcadet',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Charcadet',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Walrein',
      //   cardType: 'Stage 2',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Shellos',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Cryogonal',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Black Kyurem GX',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Bruxish',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Quaxly',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Pikachu EX',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Magnemite',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Magneton',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Magnezone',
      //   cardType: 'Stage 2',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Rotom',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Blitzle',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Yamask',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Cofagrigus',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Espurr',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Meowstic',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Sylveon EX',
      //   cardType: 'Stage 1',
      //   cardRarity: 'Normal'
      // },
      // {
      //   cardName: 'Dedenne',
      //   cardType: 'Basic',
      //   cardRarity: 'Normal'
      // }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cards', null, {});
  }
};
