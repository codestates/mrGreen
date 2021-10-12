'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  theme.init({
    plantId: DataTypes.STRING,
    interior: DataTypes.BOOLEAN,
    begginer: DataTypes.BOOLEAN,
    lucky: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'theme',
  });
  return theme;
};