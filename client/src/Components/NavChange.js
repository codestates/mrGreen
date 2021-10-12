import React from "react";
import "../Styles/Nav.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function NavChange({ setIsLogin }) {

  const history = useHistory();

  const handleLogout = () => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/logout`    
    })
    .then((res) => {
      history.push("/");
      setIsLogin(false)
    })
    
  }

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
