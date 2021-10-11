import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function NavChange() {

  const handleLogout = () => {
    
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
          <Link to="/" className="nav_menu_sub" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavChange;
