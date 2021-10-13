const { user, plant, favorite } = require("../../models");

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
        if (!created) {
          return res.status(202).send({ success: false });
        } else {
          const findfavoritePlant = await favorite.findAll({
            where: { userId: req.body.userId },
            attributes: ["plantId"],
          });

          res.status(200).send({ favoritePlant: favoritePlant, success: true });
        }
      })
      .catch((err) => res.send(err));
  },
  deleteFavorite: async (req, res) => {
    const findPlant = await favorite.findOne({
      where: { userId: req.body.userId, plantId: req.params.id },
    });

    if (findPlant) {
      favorite
        .destroy({
          where: { userId: req.body.userId, plantId: req.params.id },
        })
        .then(async (resp) => {
          const favoritePlant = await favorite.findAll({
            where: { userId: req.body.userId },
            attributes: ["plantId"],
          });

          return res
            .status(200)
            .send({ favoritePlant: favoritePlant, success: true });
        });
    }
  },
};
