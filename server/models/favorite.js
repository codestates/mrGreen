"use strict";

// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define('favorite', {
//         userId: {
//             type: DataTypes.STRING(40),
//         },
//         plantId: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     });
// }

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    static associate(models) {}
  }
  favorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      plantId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "favorite",
    }
  );
  return favorite;
};
