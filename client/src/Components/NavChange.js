import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function NavChange({ setIsLogin, accessToken, setUserInfo }) {
  const history = useHistory();
  const handleLogout = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/user/logout`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (res.status === 200) setUserInfo({});
        setIsLogin(false);
        window.sessionStorage.clear();
        history.push("/");
        document.body.style.overflow = "unset";
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="nav_container">
      <div className="nav_in">
        <Link to="/" className="nav_logo"></Link>
        <div className="nav_menu">
          <Link className="nav_menu_sub" to="/search">
            Search
          </Link>
          <Link to="/mypage" className="nav_menu_sub">
            Mypage
          </Link>
          <span className="nav_menu_sub" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavChange;
