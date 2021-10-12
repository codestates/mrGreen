const { Users } = require("../../../models");
const jwt = require("jsonwebtoken");

const generateAccessToken = (data) => {
  return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: "30m" });
};
const generateRefreshToken = (data) => {
  return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: "14d" });
};

module.exports = async (req, res) => {
  const { nickname, email, password, gender } = req.body;

  try {
    const [result, created] = await Users.findOrCreate({
      where: { nickname, email, password, gender },
    });

    if (created) {
      const accessToken = generateAccessToken(result.dataValues);
      const refreshToken = generateRefreshToken(result.dataValues);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "None",
      });
      res.status(201).send({ message: "ok" });
    } else {
      res.status(409).send({ message: "already userinfo exists" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
