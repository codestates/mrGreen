'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {

        }
    }
    User.init({
        nickname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        gender: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
} 