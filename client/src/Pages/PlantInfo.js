import React, { useState } from "react";
import "../Styles/PlantInfo.css";
import testImg from "../Image/PlantList/001_Monstera.jpg";

function PlantInfo(props) {
  // const [isExistedPlant, setIsExistedPlant] = useState(false);

  return (
    <div className="plant">
      <div className="plant_area">
        {/* {isExistedPlant ? (
          <div className="toast plant_notification">
            이미 식물이 추가되었습니다
          </div>
        ) : null} */}

        <div className="plant_top_area">
          <div className="plant_title_area">
            <div className="plant_name">{"Monstera"}</div>
            <div className="add_favorite">
              <button className="plusBtn">+</button>
              <div className="plusBtn_desc">추가하기</div>
            </div>
            <div className="add_favorite">
              <button className="plusBtn">-</button>
              <div className="plusBtn_desc">삭제하기</div>
            </div>
          </div>
        </div>
        <div className="plant_bottom_area">
          <div className="plant_container">
            <div className="plant_img_box">
              <img className="plant_plantImg" alt="plant" src={testImg} />
            </div>
            <div className="plant_info">
              <div className="plant_info_names">
                <div className="plant_category">{"몬스테라"}</div>
                <div className="plant_content">{"Monstera"}</div>
              </div>

              <div className="plant_info_mid">
                <div className="plant_category">{"꽃말"}</div>
                <div className="plant_content">{"웅장한 계획"}</div>
                <div className="plant_category">{"난이도"}</div>
                <div className="plant_content">{"낮음"}</div>
                <div className="plant_category">{"물주는 횟수"}</div>
                <div className="plant_content">
                  {"주 1~2회 겉흙이 마르면 듬뿍 주면 됩니다"}
                </div>
              </div>
              <div className="plant_info_desc">
                {
                  "식물이 크기 때문에 큰 화분에 심어야 하며, 받침대를 세워 고정시켜야 합니다 그리고 반그늘을 좋아하므로 실내에 두는 것이 좋습니다."
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantInfo;
