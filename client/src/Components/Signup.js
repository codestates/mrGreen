import React from "react";
import "../Styles/Signup.css";

function Signup() {
  return (
    <div className="Signup">
      <div className="signup_background"></div>
      <div className="signup_modal">
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
                비밀번호는 8글자 이상, <br /> 영문 대문자를 포함해야 합니다
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
            <button className="btn signup_forLogin">로그인</button>
          </div>
          <button className="btn signupBtn">Login</button>
        </div>
        {/* <img alt="plant" src="../Image/Login/Login Signup_img.jpg" className="login_img"></img> */}
        <div className="login_img"></div>
      </div>
    </div>
  );
}

export default Signup;
