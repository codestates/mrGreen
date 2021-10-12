const { user } = require("../../../models");
const jwt = require("jsonwebtoken");

// 유효성 검사 추가

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  console.log(userInfo);
  const refreshToken = "refreshToken";
  res
    .status(200)
    .send({ accessToken: "accessToken", userInfo: userInfo, message: "ok" });

  // const data = await Users.findOne({
  //   where: {
  //     email: req.body.email,
  //   },
  // }).then(async (data) => {
  //   if (!data) {
  //     res.status(404).send({ message: "Invalid user" });
  //   } else {
  //     const userInfo = await Users.findOne({
  //       where: {
  //         password: req.body.password,
  //         email: req.body.email,
  //       },
  //     })
  //       .then((userInfo) => {
  //         if (!userInfo) {
  //           res.status(401).send({ message: "Invalid password" });
  //         } else {
  //           const payload = {
  //             id: userInfo.id,
  //             userId: userInfo.userId,
  //             email: userInfo.email,
  //             gender: userInfo.gender,
  //           };
  //           const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
  //             expiresIn: "30m",
  //           });
  //           const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
  //             expiresIn: "14d",
  //           });
  //           res.cookie("refreshToken", refreshToken, {
  //             httpOnly: true,
  //             sameSite: "None",
  //           });
  //           res
  //             .status(200)
  //             .set("Access-Control-Expose-Headers", "authorization")
  //             .set("authorization", `Bearer ${accessToken}`)
  //             .send({
  //               data: { accessToken },
  //               message: "Login success",
  //             });
  //         }
  //       })
  //       .catch((err) => {
  //         res.status(500).send(err);
  //       });
  //   }
  // });
};
