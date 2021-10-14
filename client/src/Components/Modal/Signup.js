/* eslint-disable */
import React, { useRef, useEffect, useState } from "react";
import "../../Styles/Signup.css";
import axios from "axios";
import { isValidEmail, isValidPassword } from "../../Utils/validCheckForLogin";

function Signup({ signupModal, setSignupModal, setLoginModal }) {
  const [signupValue, setSignupValue] = useState({
    email: "",
    nickname: "",
    password: "",
    gender: "",
  });

  const [examineSignup, setExamineSignup] = useState({
    gender: false,
    email: "0",
    password: "0",
    nickname: "0",
  });

  //! 유효성 검사 useEffect
  useEffect(() => {
    nicknameValidation();
  }, [signupValue]);

  useEffect(() => {
    emailValidation();
  }, [signupValue.email]);

  useEffect(() => {
    passwordValidation();
  }, [signupValue.password]);

  useEffect(() => {
    genderValidation();
  }, [signupValue.gender]);

  const modalEl = useRef(null);

  const handleCloseModal = (e) => {
    console.log(e.target);
    if (e.target === modalEl.current) {
      console.log("들어옴");
      setSignupModal(false);
      document.body.style.overflow = "unset";
    }
  };

  const handleLoginBtn = () => {
    setSignupModal(false);
    setLoginModal(true);
  };

  //! 회원가입 구현
  const signupHandler = async () => {
    const { email, password, gender, nickname } = examineSignup;

    console.log(email, password, gender, nickname);
    console.log(
      signupValue.email,
      signupValue.password,
      signupValue.gender,
      signupValue.nickname
    );

    if (!email || !password || !gender || !nickname) {
      setExamineSignup({ ...examineSignup, ["nickname"]: false });
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/user/signup`,
          {
            email: signupValue.email,
            nickname: signupValue.nickname,
            password: signupValue.password,
            gender: signupValue.gender,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 201) {
            setSignupModal(false);
            setLoginModal(true);
            document.body.style.overflow = "hidden";
            alert("회원가입 완료");
          }
        })
        .catch((err) => alert(err));
    }
  };

  //! 유효성 검사
  const nicknameValidation = () => {
    if (signupValue.nickname.length > 0) {
      setExamineSignup({ ...examineSignup, ["nickname"]: true });
    } else {
      setExamineSignup({ ...examineSignup, ["nickname"]: false });
    }
  };

  const emailValidation = () => {
    if (isValidEmail(signupValue.email)) {
      setExamineSignup({ ...examineSignup, ["email"]: true });
    } else {
      setExamineSignup({ ...examineSignup, ["email"]: false });
    }

    if (signupValue.email.length === 0) {
      setExamineSignup({ ...examineSignup, ["email"]: "0" });
    }
  };

  const passwordValidation = () => {
    if (isValidPassword(signupValue.password)) {
      setExamineSignup({ ...examineSignup, ["password"]: true });
    } else {
      setExamineSignup({ ...examineSignup, ["password"]: false });
    }

    if (signupValue.password.length === 0) {
      setExamineSignup({ ...examineSignup, ["password"]: "0" });
    }
  };

  const genderValidation = () => {
    if (signupValue.gender.length > 0) {
      setExamineSignup({ ...examineSignup, ["gender"]: true });
    }
  };

  //! input value 함수
  const signupInputValueHandler = (e) => {
    const { name, value } = e.target;

    setSignupValue({ ...signupValue, [name]: value });
  };

  return (
    <div className="signup">
      <div
        onClick={(e) => handleCloseModal(e)}
        ref={modalEl}
        className="modal_background"
      >
        <div className="signup_modal">
          <div className="signup_modal_leftside">
            <div className="signup_title">Sign Up</div>
            <div className="signup_mid">
              <div className="signup_input_gender_set">
                <div className="signup_input_gender_title">Gender</div>
                <div>
                  <input
                    onKeyPress={(e) =>
                      e.key === "Enter" ? signupHandler() : null
                    }
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
                    onKeyPress={(e) =>
                      e.key === "Enter" ? signupHandler() : null
                    }
                    onChange={(e) => signupInputValueHandler(e)}
                    name="gender"
                    type="radio"
                    name="gender"
                    value="female"
                  ></input>
                  Female
                </div>
              </div>
              <div className="signup_input_gender_label"></div>
            </div>
            <div className="signup_input_area">
              <div className="signup_input_email_set">
                <input
                  onKeyPress={(e) =>
                    e.key === "Enter" ? signupHandler() : null
                  }
                  onChange={(e) => signupInputValueHandler(e)}
                  name="email"
                  type="email"
                  className="signup_input_email"
                  placeholder="Email"
                ></input>
                {examineSignup.email || examineSignup.email === "0" ? (
                  <label for="signup_input_email">&nbsp;</label>
                ) : (
                  <label for="signup_input_email">
                    올바르지 않은 이메일 형식입니다
                  </label>
                )}
              </div>
              <div className="signup_input_password_set">
                <input
                  onKeyPress={(e) =>
                    e.key === "Enter" ? signupHandler() : null
                  }
                  onChange={(e) => signupInputValueHandler(e)}
                  name="password"
                  type="password"
                  className="signup_input_password"
                  placeholder="Password"
                ></input>
                {examineSignup.password || examineSignup.password === "0" ? (
                  <label for="signup_input_password">&nbsp;</label>
                ) : (
                  <label for="signup_input_password">
                    비밀번호는 8글자 이상, 영문, 특수문자를 포함해야 합니다
                  </label>
                )}
              </div>
              <div className="signup_input_nickname_set">
                <input
                  onKeyPress={(e) =>
                    e.key === "Enter" ? signupHandler() : null
                  }
                  onChange={(e) => signupInputValueHandler(e)}
                  name="nickname"
                  type="text"
                  className="signup_input_nickname"
                  placeholder="Nickname"
                ></input>
                {examineSignup.nickname || examineSignup.gender ? (
                  <label for="signup_input_password">&nbsp;</label>
                ) : (
                  <label for="signup_input_password">
                    모든 항목을 확인해주세요
                  </label>
                )}
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
