const { User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!data) {
        return res.status(401).send({ "message" : "Invalid password"})
    } else {
        res.status(200).send({
            data: {
              user: {
                nickname: data.nickname,
                email: data.email,
                gender: data.gender
              }
            },
            message: 'User data successfull found'
          })
        }
    }
