module.exports = async (req, res) => {
  return res.cookie("refrashToken", "").send({ message: "Logout success" });
};
