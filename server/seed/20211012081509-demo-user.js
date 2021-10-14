"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        nickname: "kimcoding",
        email: "kimcoding@gmail.com",
        password: "mrgreen1234!",
        gender: "male"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
