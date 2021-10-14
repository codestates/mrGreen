const { user } = require("../../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  // res.end();
  const { nickname, email, password, gender } = req.body;

  //! 정보가 다 들어오지 않는다면
  if (!nickname || !email || !password || !gender) {
    res
      .status(422)
      .setHeader("Access-Control-Allow-Origin")
      .send("모든 항목을 입력해주세요");
  }

  //! email이 있는지 찾는다
  await user.findOne({ where: { email: email } }).then((resp) => {
    if (resp) {
      return res
        .status(404)
        .setHeader("Access-Control-Allow-Origin")
        .send("이미 사용중인 이메일입니다");
    } else {
      //! 이메일이 같은 것이 없으면 정보 저장
      user
        .findOrCreate({
          where: {
            email: email,
            nickname: nickname,
            password: password,
            gender: gender,
          },
          defaults: "newUser",
        })
        .then(([save, created]) => {
          if (!created) {
            return res
              .status(404)
              .json({ message: "이미 사용중인 이메일입니다" });
          } else {
            const refreshToken = jwt.sign(
              save.dataValues,
              process.env.REFRESH_SECRET,
              {
                expiresIn: "6h",
              }
            );

            return res
              .status(201)
              .cookie("jwt", refreshToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 14,
              })
              .json({ message: "성공적으로 회원가입을 완료하였습니다" });
          }
        })
        .catch((err) => {
          return res.status(500).send("err");
        });
    }
  });
};
