const { user, plant, favorite } = require("../models")

module.exports = {
  
    addFavoritet: async(req, res) => {

        const { userId, title } = req.body     
        const find = await favorite.findAll({
            where: { userId: userId, plantId: plantId },
            attributes: ['id', 'plantId']
        });      

        if(find.length !== 0) {
            res.status(202).send({ success: false })
        
        } else {
            mylist.create({
                userId: userId, plantId: plantId
            }).then(make => {
                res.status(200).send({ success: true }) 
            }).catch(err => res.send(err))
        }
    },
  
  
    getFavorite: async (req, res) => {

        const find = await favorite.findAll({
            where: { userId: req.body.userId },
            attributes: ['id', 'plantId', 'createdAt'],
            include: [{
                model: plant,
            }]
        });

        if(find.length === 0) {
            res.status(202).send({ success: false })

        } else {
            let data = [];
            find.forEach(el => {
            });
            res.status(200).send({ success: true, data: data })
        }
    }
}