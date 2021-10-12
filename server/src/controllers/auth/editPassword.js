const { Users } = require("../../../models");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  const accessAuthorization = req.headers.authorization;
  const refreshAuthorization = req.cookies.refreshToken;

  try {
    if (
      accessAuthorization === undefined ||
      refreshAuthorization === "invalidtoken" ||
      !refreshAuthorization
    ) {
      res.status(401).send({
        message: "invalid User",
      });
    } else {
    }
  } catch {}
};
