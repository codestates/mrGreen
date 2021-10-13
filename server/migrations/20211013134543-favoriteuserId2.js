"use strict";
//!favorite id
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("favorites", "userId", Sequelize.INTEGER);

    await queryInterface.addConstraint("favorites", {
      fields: ["userId"],
      type: "foreign key",
      name: "FK_userId",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("favorites", "FK_userId");

    await queryInterface.removeColumn("favorites", "userId");
  },
};
