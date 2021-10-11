import React, { useState } from "react";
import profile from "../Image/Mypage/Mypage_leon.jpg";
import PlantCard from "../Components/PlantCard";
import "../Styles/Mypage.css";

function Mypage({ setSelectedPlant, setEditPwModal }) {
  const [myPlantList, setMyPlantList] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const handleEditPsWord = () => {
    setEditPwModal(true)
  }

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
              {/* {editPwModal ? <EditUserInfo /> : null} */}
              <button onClick={handleEditPsWord}>비밀번호 변경</button>
            </div>
          </div>
          <div className="userplant">
            <div className="userplant_Title">My Plant</div>
            <div className="userplant_Plant">
              {/* {myPlantList.map((item, index) => {
                return (
                  <PlantCard
                    setSelectedPlant={setSelectedPlant}
                    key={index}
                    item={item}
                  />
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
