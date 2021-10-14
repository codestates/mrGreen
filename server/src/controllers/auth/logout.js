module.exports = async (req, res) => {
  return res
    .status(200)
    .cookie("refrashToken", "")
    .send({ message: "Logout success" });
};
