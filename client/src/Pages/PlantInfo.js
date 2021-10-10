import React, { useState } from "react";
import "../Styles/PlantInfo.css";
import testImg from "../Image/PlantList/001_Monstera.jpg";

function PlantInfo({ plant }) {
  return (
    <div className="plant">
      <div className="plant_top_area">
        <div className="plant_title_area">
          <div className="plant_name">{plant.eng_name}</div>
          <div className="add_favorite">
            <button className="plusBtn">+</button>
            <div className="plusBtn_desc">추가하기</div>
          </div>
          {/* <div className="add_favorite">
              <button className="plusBtn">-</button>
              <div className="plusBtn_desc">삭제하기</div>
            </div> */}
        </div>
      </div>
      <div className="plant_bottom_area">
        <div className="plant_container">
          <div className="plant_img_box">
            <img
              className="plant_plantImg"
              alt="plant"
              src={require(`../Image/PlantList/${plant.image}`).default}
            />
          </div>
          <div className="plant_info">
            <div className="plant_info_names">
              <div>{plant.kor_name}</div>
              {/* <div>{plant.eng_name}</div> */}
            </div>
            <div className="plant_info_desc">{plant.description}</div>
            <div className="plant_info_mid">
              <div className="plant_info_mid_in">
                <span className="plant_category">{"꽃말"}</span>
                <span className="plant_content">{plant.means}</span>
              </div>
              <div className="plant_info_mid_in">
                <span className="plant_category">{"난이도"}</span>
                <span className="plant_content">{plant.difficulty}</span>
              </div>
              <div className="plant_info_mid_in">
                <span className="plant_category">{"물주는 횟수"}</span>
                <span className="plant_content">{plant.water}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantInfo;
