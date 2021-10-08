import React from "react";
import "../Styles/PlantInfo.css";

function PlantInfo(props) {
  return (
    <div className="plant">
      <div className="plant_title_area">
        <div className="palnt_name">{"Monstera"}</div>
        <div className="add_favorite">
          <button className="plusBtn">+</button>
          <div className="plusBtn_desc">추가하기</div>
        </div>
      </div>
      <div className="plant_container">
        <div className="plant_plantImg"></div>
        <div className="plant_info">
          <div className="plant_info_names">
            <div className="plant_info_name">
              <div className="plant_name_kr"></div>
            </div>
            <div className="plant_category">{"꽃말"}</div>
            <div className="plant_content">{"꽃말 내용"}</div>
            <div className="plant_category">{"난이도"}</div>
            <div className="plant_content">{"난이도 내용"}</div>
            <div className="plant_category">{"물주는 횟수"}</div>
            <div className="plant_content">{"물주는 횟수 내용"}</div>
          </div>
          <div className="plant_info_mid"></div>
          <div className="plant_info_desc"></div>
        </div>
      </div>
    </div>
  );
}

export default PlantInfo;
