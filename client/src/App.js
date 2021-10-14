/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { mainplants } from "./assets/mainplant";
import Loading from "./Components/Loading";
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
  const [favorite, setFavorite] = useState([]);
  // const [favorite, setFavorite] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem("mr.geen_favorite")) || [
  //       {
  //         id: 1,
  //         kor_name: "몬스테라",
  //         eng_name: "Monstera",
  //         means: "웅장한 계획",
  //         description:
  //           "식물이 크기 때문에 큰 화분에 심어야 하며, 받침대를 세워 고정시켜야 합니다. 그리고 반그늘을 좋아하므로 실내에 두는 것이 좋습니다.",
  //         difficulty: "낮음",
  //         light: "반음지",
  //         water: "겉흙이 마르면 물을 듬뿍 주면 됩니다",
  //         image: "001_Monstera.jpg",
  //       },
  //     ]
  // );
  const [loginModal, setLoginModal] = useState(false);
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
  const [plantList, setPlantList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
          setPlantList(plants);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setPlantList(mainplants);
      });
  }, []);

  // ----- log out
  // const handleLogout = () => {
  //   // axios.post("http://ec2-3-38-93-205.ap-northeast-2.compute.amazonaws.com/logout")
  //   axios({
  //     method: "get",
  //     url: `${process.env.REACT_APP_API_URL}/user/logout`,
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 200) setUserInfo({});
  //       setIsLogin(false);
  //       window.sessionStorage.clear();
  //       // history.push("/");
  //       document.body.style.overflow = "unset";
  //     })
  //     .catch((err) => console.log(err));
  // };

  const addMinusButtonHandler = () => {
    // console.log("들어 옵니다");
    let plantFilter = favorite.filter((fav) => fav.id === selectedPlant.id);
    // console.log(plantFilter);
    if (plantFilter) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };

  //! local에 선택한 식물 저장
  useEffect(() => {
    const plant = selectedPlant;
    window.localStorage.setItem("mr.geen_plant", JSON.stringify(plant));
    addMinusButtonHandler();
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
      {loginModal ? (
        <Login
          setFavorite={setFavorite}
          setIsLogin={setIsLogin}
          setAccessToken={setAccessToken}
          accessToken={accessToken}
          setUserInfo={setUserInfo}
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
      {isLogin ? (
        <NavChange
          setIsLogin={setIsLogin}
          accessToken={accessToken}
          setIsLogin={setIsLogin}
          setUserInfo={setUserInfo}
        />
      ) : (
        <Nav setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      )}
      <Switch>
        <Route exact path="/">
          <Main setSelectedPlant={setSelectedPlant} />
        </Route>
        <Route exact path="/mypage">
          <Mypage
            favorite={favorite}
            plantList={plantList}
            setSelectedPlant={setSelectedPlant}
            editPwModal={editPwModal}
            setEditPwModal={setEditPwModal}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Route>
        <Route exact path="/search">
          <Search
            plantList={plantList}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setSelectedPlant={setSelectedPlant}
            plantList={plantList}
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
            isFavorite={isFavorite}
            favorite={favorite}
            userInfo={userInfo}
            setFavorite={setFavorite}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isLogin={isLogin}
            plant={selectedPlant}
            accessToken={accessToken}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
