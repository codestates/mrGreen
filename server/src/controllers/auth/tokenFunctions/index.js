require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: "12h" });
  },
  generateRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: "24h" });
  },
  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    });
  },
  sendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken: accessToken }, message: "ok" });
  },
  resendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken: accessToken }, message: "ok" });
  },
  isAuthorized: (req) => {
    // const cookie = req.headers.cookie;
    // if (!cookie) {
    //   return null;
    // }
    // const token = cookie.split("=")[1]
    // let userInfo = jwt.verify(token, process.env.REFRESH_SECRET);
    // return userInfo;
    const authorization = req.headers["authorization"];
    console.log(req.headers.authorization)
    console.log(authorization)
    if (!authorization) {
      console.log("authorization아닐때------", authorization)
      return null;
    } else {
      const token = authorization.split(" ")[1];
      return jwt.verify(token, process.env.ACCESS_SECRET);
    }
    const token = cookie.split("=")[1];
    let userInfo = jwt.verify(token, process.env.REFRESH_SECRET);
    return userInfo;
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      // return null if refresh token is not valid
      return null;
    }
  },
};
