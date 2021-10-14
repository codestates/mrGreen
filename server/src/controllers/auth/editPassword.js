const { parse } = require("dotenv");
const { user } = require("../../../models");
const { isAuthorized, resendAccessToken } = require("./tokenFunctions");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // res.end();
  const { prevPw, newPw } = req.body;
  // 이미 클라이언트에서 유효성검사를 마쳤기때문에 요청으로 들어온 newPw 를 userinfo의 password에 넣어줘야 한다.
  if (prevPw !== newPw) {
    // 유저를 인증하면 그 데이터베이스를 조회해서 비밀번호를 비교해서 그 결과에 따라 비밀번호를 변경한다. 그리고 그 값을 응답한다.
    // 유저정보 불러오기, 기존의 비밀번호와 prevPw를 비교, 맞다면 기존비밀번호에 newPw를 덮어쓰기만하고 응답으로는 메세지만 보낸다.
    const tokenUserInfo = isAuthorized(req);
    if (!tokenUserInfo) {
      return res.status(401).json({ message: "Invalid User" });
    } else {
      return res.status(200).send({ message: "New Password Created!!" });
    }
  }
};
