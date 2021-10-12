"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate(models) {}
  }
  Theme.init(
    {
      plantId: DataTypes.STRING,
      interior: DataTypes.STRING,
      beginner: DataTypes.STRING,
      luck: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
