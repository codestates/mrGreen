import React, { useRef, useEffect, useState } from "react";
import MenProfile from "../Image/Mypage/Mypage_leon.jpg";
import GirlProfile from "../Image/Mypage/Mypage_matilda.jpg";
import "../Styles/Mypage.css";
import { mainplants } from "../assets/mainplant";
import PlantCard from "../Components/PlantCard";
import axios from "axios";
import EditUserInfo from '../Components/Modal/EditUserInfo';

function Mypage({ setSelectedPlant, setEditPwModal, editPwModal }) {

  const [userInfo, setUserInfo] = useState({
    nickname: "Kimcoding",
    email: "kimcoding@gmail.com",
    gender: "male",
    password: "abcde123!" 
  });

  const handleEditPsWord = () => {
    setEditPwModal(true);
    document.body.style.overflow = "hidden";
  }

  /* userinfo 값을 가져오는 코드 */

  // axios({
  //   method: "POST",
  //   url: `${process.env.REACT_APP_API_URL}/mypage`,
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   withCredentials: true,
  //   data: {
  //     nickname: userInfo.nickname,
  //     email: userInfo.email,
  //     gender: userInfo.gender
  //   }
  // }).then((res) => {
  //   console.log(res);
  //   // setUserInfo(res.value)
  // })

  return (
    <div className="mypage_Containor">
      {editPwModal ? (
        <EditUserInfo
          editPwModal={editPwModal}
          setEditPwModal={setEditPwModal}
        />
      ) : null}
      <div className="mypage_In">
        <div className="mypage">
          <div className="userpage">
            {userInfo.gender === "male" ? (
              <img className="userpage_Photo" src={MenProfile}></img>
            ) : (
              <img className="userpage_Photo" src={GirlProfile}></img>
            )}
            <div className="userpage_UserInfo">
              <div className="userpage_NickName">{userInfo.nickname}</div>
              <div className="userpage_Email">
               {userInfo.email}
              </div>
              <button onClick={handleEditPsWord}>비밀번호 변경</button>
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
