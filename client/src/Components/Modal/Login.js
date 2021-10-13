import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
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
    "존재하지 않는 이메일입니다, 다시 확인해 주세요",
    "올바르지 않은 비밀번호입니다, 다시 확인해 주세요",
    "로그인에 실패 했습니다, 이메일과 비밀번호를 다시 확인해 주세요",
  ];
  const [msgIdx, setMsgIdx] = useState(0);
  const cursorPassword = useRef(null);

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

  const emailPressEnter = (e) => {
    if (!checkEmail && e.key === "Enter") {
      cursorPassword.current.focus();
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
  const passwordPressEnter = (e) => {
    if (e.key === "Enter") {
      handleLoginBtn();
    }
  };

  const handleLoginBtn = () => {
    // todo: 유효성검사 통과한 이메일과 비번이 모두 있을 때, 서버에 로그인 요청
    // 응답 성공 시, 로그인상태 변경, 로그인 모달 끄기, 메인으로 리더렉션 + 액세스 토큰 관리, 리프레시 토큰은?
    // 응답 에러 코드에 따라 - 메세지 띄우기
    const { email, password } = inputValues;
    if (!email || !password || msgIdx === 1) {
      setMsgIdx(2);
    } else {
      setMsgIdx(0);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/login`,
          // `http://localhost:80/user/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          //console.log(res)
          if (res.status === 200) {
            //로그인 상태 변경, 쿠키에 있는 엑세스 토큰을 상태로 저장, 로그인 모달 끄고, 메인으로

            console.log(res.data);
            loginHandler(res.data.accessToken);
            setLoginModal(false);
            history.push("/");
            document.body.style.overflow = "unset";
          }
          if (res.status === 401) {
            setMsgIdx(3);
          }
          if (res.status === 404) {
          }
        })
        .catch((err) => {
          alert(err);
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
                  onKeyPress={emailPressEnter}
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
                  onKeyPress={passwordPressEnter}
                  ref={cursorPassword}
                ></input>
                {msgIdx !== 0 ? (
                  <label for="login_input_password">{pwMessage[msgIdx]}</label>
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