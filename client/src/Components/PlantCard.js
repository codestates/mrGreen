import React from "react";
import img1 from "../Image/PlantList/001_Monstera.jpg";
import "../Styles/PlantCard.css";

function PlantCard(props) {
  // 플랜트 선택시, /plantInfo 로 이동 및 해당 플랜트 아이디로 맞는 식물 정보 뿌려주기
  // 서버랑 연결 후 현재
  return (
    <>
      {/* 목업 코드 */}
      <div className="plantCard">
        <img src={img1}></img>
        <div className="plantCard_text">팔레아 페페로미오데스</div>
        <div className="plantCard_subText">Missionary Plant</div>
      </div>

      {/* 기능 추가 시 사용할 코드 */}
      {/* <div key={props.id} className="plantCard">
        <img
          src={require(`../Image/PlantList/${props.image}`).default}
          alt={props.name}
        ></img>
        {/* <img src={require(`../Image/PlantList/001_Monstera.jpg`).default} alt="plant" /> */}
        {/* <div className="plantCard_text">{props.name_kr}</div>
        <div className="plantCard_subText">{props.name_en}</div>
      </div> */}
    </>
  );
}

export default PlantCard;
