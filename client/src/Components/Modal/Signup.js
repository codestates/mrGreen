import React, { useRef, useEffect, useState } from "react";
import "../../Styles/Signup.css";
import axios from "axios";

function Signup({ signupModal, setSignupModal, setLoginModal }) {
  const [signupValue, setSignupValue] = useState({
    email: "",
    nickname: "",
    password: "",
    gender: "",
  });

  const [examineSignup, setExamineSignup] = useState({
    gender: false,
    email: false,
    password: false,
    nickname: false,
  });

  console.log(signupValue);
  console.log(examineSignup);

  const modalEl = useRef();

  const handleCloseModal = (e) => {
    if (
      signupModal &&
      (!modalEl.current || !modalEl.current.contains(e.target))
    ) {
      setSignupModal(false);
      document.body.style.overflow = "unset";
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

  //! 회원가입 구현
  const signupHandler = () => {
    if (
      examineSignup.email &&
      examineSignup.password &&
      examineSignup.gender &&
      examineSignup.nickname
    ) {
      axios({
        method: "POST",
        url: "https://http://ec2-13-125-105-31.ap-northeast-2.compute.amazonaws.com:8080/signup",
        withCredentials: true,
        data: {
          email: signupValue.email,
          nickname: signupValue.nickname,
          password: signupValue.password,
          gender: signupValue.gender,
        },
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        setSignupModal(false);
        alert("회원가입 완료");
      });
    }
  };

  //! 유효성 검사
  const signupValidation = (e) => {
    console.log("들어옴");
    let reg_pw3 = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
    let reg_email =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (
      signupValue.gender.length > 0 ||
      signupValue.nickname.length > 0 ||
      reg_pw3.test(signupValue.password) ||
      reg_email.test(signupValue.email)
    ) {
      console.log("스테이트 true");
      setExamineSignup({ ...examineSignup, [e.target.name]: true });
    } else if (
      signupValue.gender.length === 0 ||
      signupValue.nickname.length === 0 ||
      reg_pw3.test(signupValue.password) ||
      reg_email.test(signupValue.email)
    ) {
      console.log("스테이트 false");
      setExamineSignup({ ...examineSignup, [e.target.name]: false });
    }

    // if (
    //   signupValue.gender.length === 0 ||
    //   signupValue.nickname.length === 0 ||
    //   !reg_pw3.test(signupValue.password) ||
    //   !reg_email.test(signupValue.email)
    // ) {
    //   setExamineSignup({ ...examineSignup, [e.target.name]: false });
    // }
  };

  //! input value 함수
  const signupInputValueHandler = (e) => {
    setSignupValue({ ...signupValue, [e.target.name]: e.target.value });
    signupValidation(e);
  };

  return (
    <div className="signup">
      <div className="modal_background">
        <div className="signup_modal" ref={modalEl}>
          <div className="signup_modal_leftside">
            <div className="signup_title">Sign Up</div>
            <div className="signup_input_gender_set">
              <div className="signup_input_gender_title">Gender</div>
              <div>
                <input
                  onChange={(e) => signupInputValueHandler(e)}
                  name="gender"
                  type="radio"
                  name="gender"
                  value="male"
                ></input>
                Male
              </div>
              <div>
                <input
                  onClick={(e) => signupInputValueHandler(e)}
                  name="gender"
                  type="radio"
                  name="gender"
                  value="female"
                ></input>
                Female
              </div>
            </div>
            <div className="signup_input_area">
              <div className="signup_input_email_set">
                <input
                  onClick={(e) => signupInputValueHandler(e)}
                  name="email"
                  type="email"
                  className="signup_input_email"
                  placeholder="Email"
                ></input>
                {examineSignup.email ? null : (
                  <label for="signup_input_email">
                    올바르지 않은 이메일 형식입니다
                  </label>
                )}
              </div>
              <div className="signup_input_password_set">
                <input
                  onChange={(e) => signupInputValueHandler(e)}
                  name="password"
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
                  onChange={(e) => signupInputValueHandler(e)}
                  name="nickname"
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
            <button onClick={() => signupHandler()} className="btn signupBtn">
              Sign Up
            </button>
          </div>
          <div className="signup_img"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
