const express = require('express');
const {user, plant, favorite } = require('../models');

module.exports = {

    editNickname: async (req, res) => {

        await user.findOne({
            where: {
                id: req.body.userId
            }
        })
        .then(data1 => {

            if(!data1) {
                return res.status(202).send({success: false})
            }

            user.update({
                nickname: req.body.nickname
            },
            {
                where: {id: req.body.userId}
            })
            .then(data2 => res.status(200).send({success: true}) )

        }).catch(err => {
            res.status(500).send(err);
        })  

    },
}