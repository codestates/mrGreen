const express = require("express");
const { DataTypes } = require("sequelize");
const Users = require("../../../models");
const favorite = require("../../../models/favorite");

module.exports = async (req, res) => {
  const accessAuthorization = req.headers.authorization;
  const refreshAuthorization = req.cookies.refreshToken;

  try {
    if (
      accessAuthorization === undefined ||
      refreshAuthorization === "invalidtoken" ||
      !refreshAuthorization
    ) {
      res.status(404).send({
        message: "Expired token",
      });
    } else {
      let user = await Users.findOne({
        where: { email: req.body.email },
      });

      if (!user) {
        res.status(404).send({ message: "Invalid user" });
      } else {
        const { id, nickname, email, password, gender } = user;

        let favorite = await favorite.findAll({
          where: { userId: user.id },
        });
        delete user.dataValues.password;
        res.status(200).send({
          data: {
            user: {
              nickname: user.dataValues.nickname,
              email: user.dataValues.email,
              gender: user.dataValues.gender,
            },
            favorite: {
              id: favorite.dataValues.id,
              kor_name: favorite.dataValues.kor_name,
              eng_name: favorite.dataValues.eng_name,
              means: favorite.dataValues.means,
              descrption: favorite.dataValues.descrption,
              difficulty: favorite.dataValues.difficulty,
              light: favorite.dataValues.light,
              water: favorite.dataValues.water,
              image: favorite.dataValues.image,
              createdAt: favorite.dataValues.createdtime,
              updatedAt: favorite.dataValues.updatedAt,
            },
          },
          message: "User data successfully found",
        });
      }
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};
