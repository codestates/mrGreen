require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: "15s" });
  },
  generateRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" });
  },
  sendRefreshToken: (res, refreshToken) => {
    res.set({ Authorization: `Bearer ${refreshToken}` });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    //Authorization: Bearer
    //jwt=a;lkdjfalkdsjf
  },
  sendAccessToken: (res, accessToken) => {
    res.json({ data: { acessToken: accessToken }, message: "ok" });
  },
  resendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken: accessToken }, message: "ok" });
  },
  isAuthorized: (req) => {
    const cookie = req.headers.cookie;
    if (!cookie) {
      return null;
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
