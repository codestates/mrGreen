'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  plant.init({
    kor_name: DataTypes.STRING,
    eng_name: DataTypes.STRING,
    means: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    light: DataTypes.STRING,
    water: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plant',
  });
  return plant;
};