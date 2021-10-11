const {authRefeshToken, makeRefreshToken, isAuthorized} = require('./tokenMethod')
const { user } = require('../../models');
const { verify } = require('jsonwebtoken');
require("dotenv").config();


module.exports = {
    
    refreshTokenHandler: async (req, res) => {

        const authorization = req.headers.authorization;
        const token = authorization.split(" ")[1];
        const decoding = verify(token, process.env.REFRESH_SALT);
        const {email} = decoding;

        if(!authorization) {
            res.status(202).send({"success": false})
        }

        await user.findOne({where: {email}})
            .then(data => {
                if(!data) {
                    return res.status(202).send("Unauthorized")
                }
                res.status(200).send({"success": true, 
                userInfo: {
                    nickname: data.dataValues.nickname,
                    email: data.dataValues.email,
                    gender:data.dataValues.createdAt
                }})
            }).catch(err => {
                res.status(500).send(err)
            })
            
    }

}