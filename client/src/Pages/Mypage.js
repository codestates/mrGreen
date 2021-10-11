import React, { useState } from "react";
import profile from "../Image/Mypage/Mypage_leon.jpg";
import "../Styles/Mypage.css";
import { mainplants } from "../assets/mainplant";
import PlantCard from "../Components/PlantCard";

function Mypage({ setSelectedPlant }) {
  return (
    <div className="mypage_Containor">
      <div className="mypage_In">
        <div className="mypage">
          <div className="userpage">
            <img className="userpage_Photo" src={profile}></img>
            <div className="userpage_UserInfo">
              <div className="userpage_NickName">Kimcoding</div>
              <div className="userpage_Email">
                <a href="https://google.com">Kimcoding@gmail.com</a>
              </div>
              <button>비밀번호 변경</button>
            </div>
          </div>
          <div className="userplant">
            <div className="userplant_Title">My Plant</div>
            <div className="userplant_Plant">
              {mainplants.map((plant, idx) => (
                <PlantCard
                  setSelectedPlant={setSelectedPlant}
                  plant={plant}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
