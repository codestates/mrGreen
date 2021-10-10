import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Image/PlantList/001_Monstera.jpg";
import "../Styles/PlantCard.css";

function PlantCard({ plant, setSelectedPlant }) {
  return (
    <>
      {/* 목업 코드 */}
      {/* <div className="plantCard">
        <img src={img1}></img>
        <div className="plantCard_text">팔레아 페페로미오데스</div>
        <div className="plantCard_subText">Missionary Plant</div>
      </div> */}

      {/* 기능 추가 시 사용할 코드 */}
      <Link
        to="/plantInfo"
        onClick={() => setSelectedPlant(plant)}
        key={plant.id}
        className="plantCard"
      >
        <img
          src={require(`../Image/PlantList/${plant.image}`).default}
          alt={plant.eng_name}
        ></img>
        <div className="plantCard_text">{plant.kor_name}</div>
        <div className="plantCard_subText">{plant.eng_name}</div>
      </Link>
    </>
  );
}

export default PlantCard;
