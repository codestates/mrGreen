

module.exports = async (req, res) => {
  // console.log("req cookie", req.cookie);
  return res.cookie("refrashToken", "").send({ message: "Logout success" });
};
