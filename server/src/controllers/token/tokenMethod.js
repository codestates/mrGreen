const {sign, verify} = require('jsonwebtoken');
require("dotenv").config();

module.exports = {

    makeRefreshToken: (data) => {
        return sign(data, process.env.REFRESH_SALT, { expiresIn: "1d"});
    },
    resRefreshToken: (res, resRefreshToken) => {

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        })
    },

    isAuthorized: (req) => {

        const authorization = req.headers.authorization;

        if (!authorization) {
            return null;
        }
        const token = authorization.split(" ")[1];

        try {
            return verify(token, process.env.REFRESH_SALT);
        } catch (err) {
            return null;
        }
    },

    authRefreshToken: (resRefreshToken) => {

        try {
            return verify(refreshToken, process.env.REFRESH_SALT)
        } catch (err) {
            return null;
        }
    }
};