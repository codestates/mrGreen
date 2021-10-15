const { plant, favorite } = require("../../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

module.exports = {
  addFavorite: async (req, res) => {
    await favorite
      .findOrCreate({
        where: {
          userId: req.body.userId,
          plantId: req.params.id,
        },
        default: "favoritePlant",
      })
      .then(async ([save, created]) => {
        if (created) {
          return res.status(200).send({ message: "추가완료" });
        }
      })
      .catch((err) => res.send(err));
  },

  deleteFavorite: async (req, res) => {
    const findPlant = await favorite.findOne({
      where: { userId: req.body.userId, plantId: req.params.id },
    });

    if (findPlant) {
      await favorite.destroy({
        where: { userId: req.body.userId, plantId: req.params.id },
      });
      res.status(200).send({ message: "삭제완료" });
    }
  },

  getFavorite: async (req, res) => {
    const authorization = req.headers.authorization.split(" ")[1];

    if (!authorization) {
      res.status(401).json({ message: "Invalid User" });
    } else {
      const userInfo = jwt.verify(authorization, process.env.ACCESS_SECRET);

      await favorite
        .findAll({ where: { userId: userInfo.id }, attributes: ["plantId"] })
        .then(async (plants) => {
          console.log(plants);
          if (plants.length === 0) {
            res.status(200).json({ favorite: [] });
          } else {
            const plantNums = [...plants].map((obj) => obj.dataValues.plantId);
            let newPlants = new Set(plantNums);
            const noDuplePlants = [...newPlants];
            await plant
              .findAll({ where: { id: { [Op.or]: noDuplePlants } } })
              .then((plants) => {
                if (plants.length === 0) {
                  res.status(200).json({ favorite: [] });
                } else {
                  const favoritePlants = [...plants].map((obj) => {
                    delete obj.dataValues.createdAt;
                    delete obj.dataValues.updatedAt;
                    return obj.dataValues;
                  });
                  res.status(200).json({ favorite: favoritePlants });
                }
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  },
};
