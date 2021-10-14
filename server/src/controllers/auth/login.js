const { user } = require("../../../models");
require("dotenv").config();
// const { sign, verify } = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("./tokenFunctions");

module.exports = (req, res) => {
  const { email, password } = req.body;

  user
    .findOne({
      where: { email: email, password: password },
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Invalid user" });
      } else {
        const userPayload = {
          id: data.dataValues.id,
          nickname: data.dataValues.nickname,
          email: data.dataValues.email,
          gender: data.dataValues.gender,
        };
        const accessToken = generateAccessToken(userPayload);
        const refreshToken = generateRefreshToken(userPayload);
        sendRefreshToken(res, refreshToken);
        sendAccessToken(res, accessToken);
      }
    })
    .catch((err) => console.log(err));
};
