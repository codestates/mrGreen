"use strict";

const { faGlassMartiniAlt } = require("@fortawesome/free-solid-svg-icons");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        nickname: "kimcoding",
        email: "kimcoding@gmail.com",
        password: "mrgreen1234!",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
