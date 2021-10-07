import React from "react";
import Begginer_Crteria from "../Components/Begginer_Crteria";
import "../Styles/Begginer.css";

function Begginer() {
  return (
    <div className="begginer_container">
      <div className="beggier_in">
        <div className="begginer_main_img">
          <div>너 왜그래?</div>
          <div>내가 무슨 잘못을 한거지</div>
          <div>너 처음에는 이런아이 아니었잖아</div>
          <div>제발 일어나</div>
        </div>

        <div className="begginer_main_text">
          <div className="begginer_main_text_bold">
            <span className="begginer_comma">"</span>
            <span>식물키우기 초보자인 당신!</span>
            <span className="begginer_comma">"</span>
          </div>
          <div className="begginer_main_text_regular">
            <div>
              식물 키울때마다 식물이 바사삭... 항상 그렇게 힘들어하셨나요?
            </div>
            <div>저희가 여러분도 키우기 쉬운 식물을 추천해드릴게요!</div>
          </div>
        </div>

        <div>
          <Begginer_Crteria />
        </div>
      </div>
    </div>
  );
}

export default Begginer;
