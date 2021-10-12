const { Users } = require("../../../models");
const jwt = require("jsonwebtoken");

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
      const accessToken = authorization.split(" ")[1];
      const accessData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
      const refreshData = jwt.verify(
        refreshAuthorization,
        process.env.REFRESH_SECRET
      );

      if (!accessData || !refreshData) {
        res.status(401).send({
          message: "Unauthorized user",
        });
      } else {
        if (accessAuthorization || refreshAuthorization) {
          res
            .clearCookie("refreshToken", {
              httpOnly: true,
              sameSite: "None",
            })
            .status(205)
            .send({
              message: "Logout success",
            });
        }
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
