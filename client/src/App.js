import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
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
  const [loginModal, setLoginModal] = useState(true);
  const [signupModal, setSignupModal] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [selectedPlant, setSelectedPlant] = useState({});
  const [plantList, setPlantList] = useState([]);

  return (
    <BrowserRouter>
      <p>안녕하세요, Monstera, Hello, 12345 글씨 추가</p>
      {loginModal ? <Login /> : null}
      {signupModal ? <Signup /> : null}
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
