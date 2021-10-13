const { user, plant, favorite } = require("../../models");

module.exports = {
  addFavorite: async (req, res) => {
    console.log("요청에 파람스 식물아이디", req.params)
    console.log("요청에 파람스 식물아이디", req.param)

    const { userId, title } = req.body;
    const find = await favorite.findAll({
      where: { userId: userId, plantId: plantId },
      attributes: ["id", "plantId"],
    });

    if (find.length !== 0) {
      res.status(202).send({ success: false });
    } else {
      mylist
        .create({
          userId: userId,
          plantId: plantId,
        })
        .then((make) => {
          res.status(200).send({ success: true });
        })
        .catch((err) => res.send(err));
    }
  },

  getFavorite: async (req, res) => {
    const find = await favorite.findAll({
      where: { userId: req.body.userId },
      attributes: ["id", "plantId", "createdAt"],
      include: [
        {
          model: plant,
        },
      ],
    });

    if (find.length === 0) {
      res.status(202).send({ success: false });
    } else {
      let data = [];
      find.forEach((el) => {});
      res.status(200).send({ success: true, data: data });
    }
  },
  deleteFavorite: (req, res) => {
    res.end();
  },
};
