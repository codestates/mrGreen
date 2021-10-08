import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Nav.css";

function Top() {
  return (
    <div className="top">
      <div onClick={() => window.scrollTo({ top: 0 })} className="top_circle">
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  );
}

export default Top;
