import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login_background"></div>
      <div className="login_modal">
        <div className="login_modal_leftside">
          <div className="login_title">Log in</div>
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
                비밀번호는 8글자 이상, <br /> 영문 대문자를 포함해야 합니다
              </label>
            </div>
          </div>
          <div className="login_forSignup">
            <div className="login_text">아직 회원가입을 하지 않으셨나요?</div>
            <button className="login_forSignup_link">회원가입</button>
          </div>
          <button className="btn loginBtn">Login</button>
        </div>
        {/* <img alt="plant" src="../Image/Login/Login Signup_img.jpg" className="login_img"></img> */}
        <div className="login_img"></div>
      </div>
    </div>
  );
}

export default Login;
