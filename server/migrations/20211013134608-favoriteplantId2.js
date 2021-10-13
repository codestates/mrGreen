"use strict";
//! favorite plant
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("favorites", "plantId", Sequelize.INTEGER);

    await queryInterface.addConstraint("favorites", {
      fields: ["plantId"],
      type: "foreign key",
      name: "FK_plantId",
      references: {
        table: "plants",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("favorites", "FK_plantId");

    await queryInterface.removeColumn("favorites", "plantId");
  },
};
