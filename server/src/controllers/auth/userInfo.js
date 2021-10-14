const { user, favorite, plant } = require("../../../models");

const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // console.log("-------header------", req.headers.cookie);
  // console.log("----split-----", req.headers.cookie.split(" "));
  // const Token = req.headers.cookie.split(" ")[6];
  const authorization = req.headers.authorization.split(" ")[1];
  // console.log("헤더 authorization-------",authorization)
  // const refreshToken = Token.split("=")[1];
  // console.log("------refresh------", refreshToken);

  if (!authorization) {
    res.status(401).json({ message: "Invalid User" });
  } else {
    const userInfo = jwt.verify(authorization, process.env.ACCESS_SECRET);

    const payload = {
      id: userInfo.id,
      email: userInfo.email,
      nickname: userInfo.nickname,
      gender: userInfo.gender,
    };

    await favorite
      .findAll({ where: { userId: userInfo.id }, attributes: ["plantId"] })
      .then(async (plants) => {
        const plantNums = [...plants].map((obj) => obj.dataValues.plantId);
        let newPlants = new Set(plantNums);
        const noDuplePlants = [...newPlants];
        await plant
          .findAll({ where: { id: { [Op.or]: noDuplePlants } } })
          .then((plants) => {
            const favoritePlants = [...plants].map((obj) => {
              delete obj.dataValues.createdAt;
              delete obj.dataValues.updatedAt;
              return obj.dataValues;
            });

            res
              .status(200)
              .json({ userInfo: payload, favorite: favoritePlants });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
};
