'use strict';

const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('favorite', {
        userId: {
            type: DataTypes.STRING(40),
        },
        plantId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}