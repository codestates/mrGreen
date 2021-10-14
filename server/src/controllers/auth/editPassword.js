const { user } = require("../../../models");
const { parse } = require("dotenv");
const jwt = require('jsonwebtoken');
const { isAuthorized, resendAccessToken, generateAccessToken } = require("./tokenFunctions");

module.exports = async (req, res) => {
  const { prevPw, newPw } = req.body;
  console.log(req)
  // 이미 클라이언트에서 유효성검사를 마쳤기때문에 요청으로 들어온 newPw 를 userinfo의 password에 넣어줘야 한다.
  if (prevPw !== newPw) {
    console.log(req.headers)
    const a = req.headers.cookie;
    // const b = jwt.verify('a', process.env.REFRESH_SECRET)
    // console.log(b)
    // 유저를 인증하면 그 데이터베이스를 조회해서 비밀번호를 비교해서 그 결과에 따라 비밀번호를 변경한다. 그리고 그 값을 응답한다.
    // 유저정보 불러오기, 기존의 비밀번호와 prevPw를 비교, 맞다면 기존비밀번호에 newPw를 덮어쓰기만하고 응답으로는 메세지만 보낸다.
    // const tokenUserInfo = isAuthorized(req);
    // const token = req.headers.authorization.split(' ')[1];
    // // console.log(token)
    // // 유저정보가 (토큰) 을 인증할 수 없을때
    // if (!token) {
    //   return res.status(401).json({ message: "Invalid User" });
    
    // // 유저정보가 인증가능하고, 기존비밀번호와 유효한 새 비밀번호가 입력되었을때
    // } else { 
    //   const userPayload = { newPw: newPw }; 
    //   const newAccessToken = generateAccessToken(userPayload);
    //   resendAccessToken(newAccessToken, password);
    //   
    // }
    return res.status(200).send({ message: "New Password Created!!" });
  }
};
