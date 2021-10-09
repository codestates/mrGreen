'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Plant extends Model {

        static associate(models) {

        }
    }
    Plant.init({
        kor_name: DataTypes.STRING,
        eng_name: DataTypes.STRING,
        means: DataTypes.STRING,
        description: DataTypes.STRING,
        difficulty: DataTypes.STRING,
        light: DataTypes.STRING,
        water: DataTypes.STRING,
        image: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Plant',
    });
    return Plant;
} 