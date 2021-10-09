import React, { useRef, useEffect } from "react";
import "../../Styles/Signup.css";

function Signup({ signupModal, setSignupModal, setLoginModal }) {
  const modalEl = useRef();

  const handleCloseModal = (e) => {
    if (
      signupModal &&
      (!modalEl.current || !modalEl.current.contains(e.target))
    ) {
      setSignupModal(false);
    }
  };

  const handleLoginBtn = () => {
    setSignupModal(false);
    setLoginModal(true);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  });

  return (
    <div className="signup">
      <div className="modal_background">
        <div className="signup_modal" ref={modalEl}>
          <div className="signup_modal_leftside">
            <div className="signup_title">Sign Up</div>
            <div className="signup_input_gender_set">
              <div className="signup_input_gender_title">Gender</div>
              <div>
                <input type="radio" name="gender" value="male"></input>
                Male
              </div>
              <div>
                <input type="radio" name="gender" value="female"></input>
                Female
              </div>
            </div>
            <div className="signup_input_area">
              <div className="signup_input_email_set">
                <input
                  type="email"
                  className="signup_input_email"
                  placeholder="Email"
                ></input>
                <label for="signup_input_email">
                  올바르지 않은 이메일 형식입니다
                </label>
              </div>
              <div className="signup_input_password_set">
                <input
                  type="password"
                  className="signup_input_password"
                  placeholder="Password"
                ></input>
                <label for="signup_input_password">
                  비밀번호는 8글자 이상, 영문 대문자를 포함해야 합니다
                </label>
              </div>
              <div className="signup_input_nickname_set">
                <input
                  type="text"
                  className="signup_input_nickname"
                  placeholder="Nickname"
                ></input>
              </div>
            </div>
            <div className="signup_forLogin">
              <div className="signup_text">이미 가입한 아이디가 있나요?</div>
              <button className="btn signup_forLogin" onClick={handleLoginBtn}>
                로그인
              </button>
            </div>
            <button className="btn signupBtn">Sign Up</button>
          </div>
          <div className="signup_img"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
