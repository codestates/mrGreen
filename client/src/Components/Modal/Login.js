import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from 'react-router';
import "../../Styles/Login.css";
import { isValidEmail, isValidPassword } from "../../Utils/validCheckForLogin";

function Login({ loginModal, setLoginModal, setSignupModal, loginHandler }) {
  const history = useHistory();
  const modalEl = useRef();
  //----모달 온오프 관련------

  const handleCloseModal = (e) => {
    if (
      loginModal &&  
      (!modalEl.current || !modalEl.current.contains(e.target)) 
    ) {
      setLoginModal(false); 
      document.body.style.overflow = "unset";
    }
  };

  const handleSignupBtn = () => {  
    setLoginModal(false); 
    setSignupModal(true);  
  };

  useEffect(() => {  
    window.addEventListener("click", handleCloseModal); 
    return () => {
      window.removeEventListener("click", handleCloseModal); 
    };
  });
  //----로그인 기능 구현-----
  const [inputValues, setInputValues] = useState({ email: "", password: "" }); 
  const [checkEmail, setCheckEmail] = useState(false);  
  const pwMessage = [  
    "",
    "비밀번호는 8글자 이상, 특수 문자를 포함해야 합니다",  
    "모든 요소는 필수 요소입니다,\n올바른 이메일, 비밀번호를 입력해 주세요",  
    "이미 가입된 이메일 입니다",  
    "이메일, 비밀번호 등에 오류가 있습니다, 다시 시도해 주세요", 
  ];
  const [msglIdx, setMsgIdx] = useState(0);

  const handleInputEmail = (e) => {
    // todo: 이메일 유효성 검사에 따라 메세지 on,off
    const { type, value } = e.target; 
    if (isValidEmail(value)) {  
      setCheckEmail(false); 
      setInputValues({ ...inputValues, [type]: value }); 
    } else { 
      setCheckEmail(true); 
    }
  };

  const handleInputPassword = (e) => {
    // todo: 비번 유효성 검사에 따라 메세지 on,off
    const { type, value } = e.target;
    if (isValidPassword(value)) {  
      setInputValues({ ...inputValues, [type]: value });  
      setMsgIdx(0); 
    } else {
      setMsgIdx(1);  
    }
  };

  const handleLoginBtn = () => {
    // todo: 유효성검사 통과한 이메일과 비번이 모두 있을 때, 서버에 로그인 요청
    // 응답 성공 시, 로그인상태 변경, 로그인 모달 끄기, 메인으로 리더렉션 + 액세스 토큰 관리, 리프레시 토큰은?
    // 응답 에러 코드에 따라 - 메세지 띄우기, (인풋 밸류 초기화? )
    const { email, password } = inputValues;
    if (!email || !password || msglIdx === 1 || !checkEmail) { 
      setMsgIdx(2);
    } else {
      setMsgIdx(0);
      axios
        .post(
          `http://${process.env.REACT_APP_API_URL}/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          //console.log(res)
          if (res.status === 200) {
            //로그인 상태 변경, 토큰처리- 리프레시랑 엑세스, 로그인 모달 끄고, 메인으로
            loginHandler(res.data.Accesstoken);
            setLoginModal(false);
            history.push('/')
          }
        })
        .catch((err) => {
          alert(err)
          //console.log(err);
        });
    }
  };

  return (
    <div className="login">
      <div className="modal_background">
        <div className="login_modal" ref={modalEl}>
          <div className="login_modal_leftside">
            <div className="login_title">Log In</div>
            <div className="login_input_area">
              <div className="login_input_email_set">
                <input
                  type="email"
                  className="login_input_email"
                  placeholder="Email"
                  onChange={(e) => handleInputEmail(e)} 
                ></input>
                {checkEmail ? (
                  <label for="login_input_email">
                    올바르지 않은 이메일 형식입니다
                  </label>
                ) : (
                  <label for="login_input_email">&nbsp;</label>
                )}
              </div>
              <div className="login_input_password_set">
                <input
                  type="password"
                  className="login_input_password"
                  placeholder="Password"
                  onChange={handleInputPassword}
                ></input>
                {msglIdx !== 0 ? (
                  <label for="login_input_password">{pwMessage[msglIdx]}</label>
                ) : (
                  <label for="login_input_password">&nbsp;</label>
                )}
              </div>
            </div>
            <div className="login_forSignup">
              <div className="login_text">아직 회원가입을 하지 않으셨나요?</div>
              <button className="login_forSignup" onClick={handleSignupBtn}>
                회원가입
              </button>
            </div>
            <button
              className="btn loginBtn"
              onClick={(e) => {
                handleLoginBtn(e);
              }}
            >
              Log In
            </button>
          </div>
          <div className="login_img"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
