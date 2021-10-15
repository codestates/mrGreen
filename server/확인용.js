const { plant, favorite } = require("../../models");

module.exports = {
  addFavorite: async (req, res) => {
    console.log("들어옴");
    await favorite
      .findOrCreate({
        where: {
          userId: req.body.userId,
          plantId: req.params.id,
        },
        default: "favoritePlant",
      })
      .then(async ([save, created]) => {
        console.log(created);
        if (!created) {
          return res.status(202).send({ success: false });
        } else {
          await favorite
            .findAll({
              where: { userId: req.body.userId },
              attributes: ["plantId"],
            })
            .then((plants) => {
              const plantNums = [...plants].map(
                (obj) => obj.dataValues.plantId
              );
              let newPlants = new Set(plantNums);
              const noDuplePlants = [...newPlants];

              plant
                .findAll({ where: { id: { [Op.or]: noDuplePlants } } })
                .then((plants) => {
                  const favoritePlants = [...plants].map((obj) => {
                    delete obj.dataValues.createdAt;
                    delete obj.dataValues.updatedAt;
                    return obj.dataValues;
                  });
                  res
                    .status(200)
                    .send({ favoritePlant: favoritePlants, success: true });
                });
            });
        }
      })
      .catch((err) => res.send(err));
  },
  deleteFavorite: async (req, res) => {
    const findPlant = await favorite.findOne({
      where: { userId: req.body.userId, plantId: req.params.id },
    });

    if (findPlant) {
      await favorite
        .destroy({
          where: { userId: req.body.userId, plantId: req.params.id },
        })
        .then(async (resp) => {
          await favorite
            .findAll({
              where: { userId: req.body.userId },
              attributes: ["plantId"],
            })

            .then((plants) => {
              const plantNums = [...plants].map(
                (obj) => obj.dataValues.plantId
              );
              let newPlants = new Set(plantNums);
              const noDuplePlants = [...newPlants];

              plant
                .findAll({ where: { id: { [Op.or]: noDuplePlants } } })
                .then((plants) => {
                  const favoritePlants = [...plants].map((obj) => {
                    delete obj.dataValues.createdAt;
                    delete obj.dataValues.updatedAt;
                    return obj.dataValues;
                  });
                  res
                    .status(200)
                    .send({ favoritePlant: favoritePlants, success: true });
                });
            })
            .catch((err) => res.send(err));
        });
    }
  },
};
