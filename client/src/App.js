import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import EditUserInfo from "./Components/Modal/EditUserInfo";
import Login from "./Components/Modal/Login";
import Signup from "./Components/Modal/Signup";
import Nav from "./Components/Nav";
import NavChange from "./Components/NavChange";
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
  const [editPwModal, setEditPwModal] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const [selectedPlant, setSelectedPlant] = useState({});
  const [plantList, setPlantList] = useState([]);

  return (
    <BrowserRouter>
      {isLogin ? (
        <NavChange />
      ) : (
        <Nav setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      )}
      {loginModal ? (
        <Login loginModal={loginModal} setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      ) : null}
      {signupModal ? (
        <Signup signupModal={signupModal} setSignupModal={setSignupModal} setLoginModal={setLoginModal} />
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
