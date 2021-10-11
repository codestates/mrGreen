import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Image/PlantList/001_Monstera.jpg";
import "../Styles/PlantCard.css";

function PlantCard({ plant, setSelectedPlant }) {
  return (
    <div onClick={() => setSelectedPlant(plant)}>
      <Link to="/plantInfo" key={plant.id} className="plantCard">
        <img
          src={require(`../Image/PlantList/${plant.image}`).default}
          alt={plant.eng_name}
        ></img>
        <div className="plantCard_text">
          <div className="plantCard_maintext">{plant.kor_name}</div>
          <div className="plantCard_subText">{plant.eng_name}</div>
        </div>
      </Link>
    </div>
  );
}

export default PlantCard;
