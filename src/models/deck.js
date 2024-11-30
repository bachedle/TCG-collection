'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      deck.hasMany(models.deckdetail, {
        foreignKey: "deckID",
      });    
    }
  };
  deck.init({
    quantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'deck',
    tableName: 'Decks',
  });
  return deck;
};