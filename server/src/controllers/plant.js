const { plant } = require("../../models");

module.exports = {
  plantList: async (req, res) => {
    const plantlist = await plant.findAll();

    if (!plantlist) {
      res.status(404).send({ message: "잘못된 요청 입니다" });
    } else {
      res.status(200).send({ plantlist: plantlist, message: "ok" });
    }
  },
};
