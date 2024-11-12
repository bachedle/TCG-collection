'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // define association here
       card.hasMany(models.MyCollection, {
        foreignKey: "cardID",
      });
    }
  };
  card.init({
    cardName: DataTypes.STRING,
    cardType: DataTypes.STRING,
    cardRarity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'card',
    tableName: 'Cards'
  });
  return card;
};