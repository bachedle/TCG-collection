'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mycollection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mycollection.init({
    quantity: DataTypes.FLOAT,
    cardRarity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mycollection',
    tableName: 'mycollections'
  });
  return mycollection;
};
