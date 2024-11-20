'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deckdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  deckdetail.init({
    cardquantity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'deckdetail',
    tableName: 'deckdetails',
  });
  return deckdetail;
};