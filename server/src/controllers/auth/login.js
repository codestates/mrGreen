const { user } = require("../../../models");
require("dotenv").config();
// const { sign, verify } = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("./tokenFunctions");

module.exports = async (req, res) => {
  // 유효성 검사
  //
  // 401 { "message" : "Invalid password"}
  // 404 {"message" : "Invalid user"}
  // err
  // 200 { data: { AccessToken: "string" }, message: "Login success" };

  const regexForEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const regexForPw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,24}/;
  const { email, password } = req.body;

  const isValidEmail = email.match(regexForEmail);
  const isValidPw = email.match(regexForPw);
  if (!isValidEmail) res.status(404).send({ message: "Invalid user" });
  if (!isValidPw) res.status(401).send({ message: "Invalid password" });

  user
    .findOne({
      where: { email: email, password: password },
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Invalid user" });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      const refreshToken = generateRefreshToken(data.dataValues);
      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, accessToken);
    })
    .catch((err) => console.log(err));
};
