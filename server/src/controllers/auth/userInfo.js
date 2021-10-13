const express = require("express");
const { user, favorite, plant } = require("../../../models");
const { isAuthorized } = require("./tokenFunctions");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  // get /user/userinfo
  // header의 토큰으로 유저를 찾음
  // 토큰으로 유저가 없다면 401 {    "message": "Unauthorized user"    }
  // 있다면, 200 data{user:{nickname, email, gender}, favorite:{ all }}
  // user table의 email이 req.body.user.email 인 userId 찾아서, userinfo도 따로 저장하고,
  // favorite table의 userId 가 찾은 userId 인 모든 데이터를 db에

  // kimcoding@gmail.com
  // mrgreen1234!

  const tokenUserInfo = isAuthorized(req);
  if (!tokenUserInfo) {
    res.status(401).json({ message: "Invalid User" });
  } else {
    const { email } = tokenUserInfo;
    user
      .findOne({ where: { email: email } })
      .then((userdata) => {
        const { id, nickname, email, gender } = userdata.dataValues;
        favorite
          .findAll({ where: { userId: id }, attributes: ["plantId"] })
          .then(async (plants) => {
            const plantNums = [...plants].map((obj) => obj.dataValues.plantId);
            let newPlants = new Set(plantNums);
            const noDuplePlants = [...newPlants];

            plant
              .findAll({ where: { id: { [Op.or]: noDuplePlants } } })
              .then((plants) => {
                const favoritePlants = [...plants].map((obj) => {
                  delete obj.dataValues.createdAt;
                  delete obj.dataValues.updatedAt;
                  return obj.dataValues;
                });

                const dataForUserInfo = {
                  user: { id, nickname, email, gender },
                  favorite: favoritePlants,
                };
                res.status(200).json(dataForUserInfo);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
};
