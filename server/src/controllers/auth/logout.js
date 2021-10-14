module.exports = async (req, res) => {
  const authorization = req.headers.authorization.split(" ")[1];
  if (authorization) {
    return res
      .status(200)
      .cookie("refreshToken", "")
      .send({ message: "Logout success" });
  } else {
    return res.status(401).send({ message: "Unauthorized user" });
  }
};
