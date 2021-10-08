import React from "react";
import "../Styles/Begginer.css";
import desc from "../Image/Theme/Begginer/Begginer_desc.png";
import level from "../Image/Theme/Begginer/Begginer_iconLevel.png";
import light from "../Image/Theme/Begginer/Begginer_iconLight.png";
import water from "../Image/Theme/Begginer/Begginer_iconWater.png";

function Begginer_Crteria() {
  return (
    <div className="begginer_Criteria">
      <img src={desc} alt="" />

      <div className="begginer_Criteria_explain">
        <div className="begginer_Criteria_explain_title">
          <span className="begginer_comma">"</span>
          <span>mr.Green이 식린이들을 위해 정한 기준</span>
          <span className="begginer_comma">"</span>
        </div>

        <div className="begginer_Criteria_explain_text">
          <div className="begginer_Criteria_explain_text_in">
            <img src={level} alt="" />
            <div className="begginer_Criteria_explain_box">
              난이도 가장 최하
            </div>
            <div className="begginer_Criteria_explain_box_in_text">
              <div>가장 중요한 식물 난이도!</div>
              <div>저희는 난이도가 가장 낮은 등급의</div>
              <div>식물들로 구성했습니다</div>
            </div>
          </div>

          <div className="begginer_Criteria_explain_text_in">
            <img src={water} alt="" />
            <div className="begginer_Criteria_explain_box">
              물주는 횟수 최소화
            </div>
            <div className="begginer_Criteria_explain_box_in_text">
              <div>식물을 키울때 물주는 법 </div>
              <div>저희는 1주일에 1번정도 주는</div>
              <div>식물들로 구성했습니다</div>
            </div>
          </div>

          <div className="begginer_Criteria_explain_text_in">
            <img src={light} alt="" />
            <div className="begginer_Criteria_explain_box">
              빛을 안봐도 무방
            </div>
            <div className="begginer_Criteria_explain_box_in_text">
              <div>식물 키울 때 빛에 따라서</div>
              <div>식물 위치를 변경해야 하는 것 아셨나요?</div>
              <div>번거로움이 적은 식물로 구성했습니다</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Begginer_Crteria;
