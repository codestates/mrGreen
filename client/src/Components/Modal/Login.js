import React, { useEffect, useRef } from "react";
import "../../Styles/Login.css";

function Login({ loginModal, setLoginModal, setSignupModal }) {
  const modalEl = useRef();

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
                ></input>
                <label for="login_input_email">
                  올바르지 않은 이메일 형식입니다
                </label>
              </div>
              <div className="login_input_password_set">
                <input
                  type="password"
                  className="login_input_password"
                  placeholder="Password"
                ></input>
                <label for="login_input_password">
                  비밀번호는 8글자 이상, 영문 대문자를 포함해야 합니다
                </label>
              </div>
            </div>
            <div className="login_forSignup">
              <div className="login_text">아직 회원가입을 하지 않으셨나요?</div>
              <button className="login_forSignup" onClick={handleSignupBtn}>
                회원가입
              </button>
            </div>
            <button className="btn loginBtn">Log In</button>
          </div>
          <div className="login_img"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
