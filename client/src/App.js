import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  const [selectedPlant, setSelectedPlant] = useState({
    id: 1,
    kor_name: "몬스테라",
    eng_name: "Monstera",
    means: "웅장한 계획",
    description:
      "식물이 크기 때문에 큰 화분에 심어야 하며, 받침대를 세워 고정시켜야 합니다. 그리고 반그늘을 좋아하므로 실내에 두는 것이 좋습니다.",
    difficulty: "낮음",
    light: "반음지",
    water: "겉흙이 마르면 물을 듬뿍 주면 됩니다",
    image: "001_Monstera.jpg",
  });
  const [plantList, setPlantList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollPositionHandler);
    return () => {
      window.removeEventListener("scroll", scrollPositionHandler);
    };
  });

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
      <Switch>
        <Route exact path="/">
          <Main setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/mypage">
          <Mypage setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/search">
          <Search setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/interior">
          <Interior setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/begginer">
          <Begginer setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/lucky">
          <Lucky setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/plantInfo">
          <PlantInfo plant={selectedPlant} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
