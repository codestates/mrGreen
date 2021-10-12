'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kor_name: {
        type: Sequelize.STRING
      },
      eng_name: {
        type: Sequelize.STRING
      },
      means: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.STRING
      },
      light: {
        type: Sequelize.STRING
      },
      water: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plants');
  }
};