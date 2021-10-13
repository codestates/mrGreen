import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading";
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
  const [isLogin, setIsLogin] = useState(
    () => JSON.parse(window.sessionStorage.getItem("mr.green_isLogin")) || false
  );
  const [userInfo, setUserInfo] = useState({});
  const [loginModal, setLoginModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [editPwModal, setEditPwModal] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const [selectedPlant, setSelectedPlant] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("mr.geen_plant")) || {
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
      }
  );
  const [plantListData, setPlantListData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(plantList);

  // // app 실행시 전체 식물 조회 _ theme 페이지 별로 서버 요청할건지에 따라서 지워도 됨
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/plantlist`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const plants = res.data.plantlist;
          setPlantListData(plants);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  // ----- log out
  const history = useHistory();

  const handleLogout = () => {
    // axios.post("http://ec2-3-38-93-205.ap-northeast-2.compute.amazonaws.com/logout")
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/logout`)
      .then((res) => {
        if (res.status === 200) setUserInfo({});
        setIsLogin(false);
        window.sessionStorage.clear();
        history.push("/");
        document.body.style.overflow = "unset";
      })
      .catch((err) => console.log(err));
  };

  // ---- login

  useEffect(() => {
    if (isLogin) {
      // 토큰 넣어줘야함 로그인해서 받아온 토큰
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/userinfo`, {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        })
        .then((res) => {
          const dataUserInfo = res.data;
          setUserInfo(dataUserInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin]);

  const loginHandler = (token) => {
    setIsLogin(true);
    setAccessToken(token);
  };

  //! local에 선택한 식물 저장
  useEffect(() => {
    const plant = selectedPlant;
    window.localStorage.setItem("mr.geen_plant", JSON.stringify(plant));
  }, [selectedPlant]);

  useEffect(() => {
    window.sessionStorage.setItem("mr.green_isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  useEffect(() => {
    window.addEventListener("scroll", scrollPositionHandler);
    return () => {
      window.removeEventListener("scroll", scrollPositionHandler);
    };
  });

  // 로딩 인디케이터 잠시 꺼둠
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

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
      {isLoading ? <Loading /> : null}
      {scrollPosition > 60 ? <Top /> : null}
      {/* 로그인상태에 따른 Nav, NavChange 변환 */}
      {isLogin ? (
        <NavChange setIsLogin={setIsLogin} handleLogout={handleLogout} />
      ) : (
        <Nav setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      )}
      {/* loginModal의 상태에 따른 컴포넌트 실행여부 */}
      {loginModal ? (
        <Login
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          setSignupModal={setSignupModal}
          loginHandler={loginHandler}
        />
      ) : null}
      {/* signupModal의 상태에 따른 컴포넌트 실행여부 */}
      {signupModal ? (
        <Signup
          signupModal={signupModal}
          setSignupModal={setSignupModal}
          setLoginModal={setLoginModal}
        />
      ) : null}
      {editPwModal ? (
        <EditUserInfo
          editPwModal={editPwModal}
          setEditPwModal={setEditPwModal}
        />
      ) : null}

      <Switch>
        <Route exact path="/">
          <Main setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/mypage">
          <Mypage
            setSelectedPlant={setSelectedPlant}
            setEditPwModal={setEditPwModal}
          />
        </Route>
        <Route exact path="/search">
          <Search
            plantListData={plantListData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setSelectedPlant={setSelectedPlant}
          />
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
          <PlantInfo
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isLogin={isLogin}
            plant={selectedPlant}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            accessToken={accessToken}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
