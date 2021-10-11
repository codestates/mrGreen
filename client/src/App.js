import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import EditUserInfo from "./Components/Modal/EditUserInfo";
import Login from "./Components/Modal/Login";
import Signup from "./Components/Modal/Signup";
import Nav from "./Components/Nav";
import NavChange from "./Components/NavChange";
import Top from "./Components/Top";
import Begginer from "./Pages/Begginer";
import Interior from "./Pages/Interior";
import Lucky from "./Pages/Lucky";
import Main from "./Pages/Main";
import Mypage from "./Pages/Mypage";
import PlantInfo from "./Pages/PlantInfo";
import Search from "./Pages/Search";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [editPwModal, setEditPwModal] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [selectedPlant, setSelectedPlant] = useState({});
  const [plantList, setPlantList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollPositionHandler);
    return () => {
      window.removeEventListener("scroll", scrollPositionHandler);
    };
  });

  // useEffect(() => {
  //   scrollStop();
  // }, [loginModal, signupModal, editPwModal]);

  //! scroll 위치 알려주는 함수
  const scrollPositionHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  //! 스크롤 이벤트
  const isElementUnderBottom = (elem, triggerDiff) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  };

  const handleScroll = () => {
    const elems = document.querySelectorAll(".scroll");
    elems.forEach((elem) => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(70px)";
      } else {
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0px)";
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  // ---- login 
  const loginHandler = (token) => {
    setIsLogin(true);
    setAccessToken(token);
  }
  // ---- token requests
  const accessTokenRequest = () => {

  }
  const refreshTokenRequest = () => {
    
  }

  return (
    <BrowserRouter>
      {scrollPosition > 60 ? <Top /> : null}
      {isLogin ? (
        <NavChange />
      ) : (
        <Nav setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      )}
      {loginModal ? (
        <Login
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          setSignupModal={setSignupModal}
          loginHandler={loginHandler}
        />
      ) : null}
      {signupModal ? (
        <Signup
          signupModal={signupModal}
          setSignupModal={setSignupModal}
          setLoginModal={setLoginModal}
        />
      ) : null}
      {editPwModal ? <EditUserInfo /> : null}
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/mypage">
        <Mypage />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/interior">
        <Interior />
      </Route>
      <Route exact path="/begginer">
        <Begginer />
      </Route>
      <Route exact path="/lucky">
        <Lucky />
      </Route>
      <Route exact path="/plantInfo">
        <PlantInfo />
      </Route>
    </BrowserRouter>
  );
}

export default App;
