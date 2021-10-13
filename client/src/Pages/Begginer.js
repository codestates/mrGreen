import React from "react";
import { Link } from "react-router-dom";
import Begginer_Crteria from "../Components/Begginer_Crteria";
import Footer from "../Components/Footer";
import "../Styles/Begginer.css";
import { mainplants } from "../assets/mainplant";
import PlantCard from "../Components/PlantCard";
import { begginerList, begginerlist } from "../assets/begginerList";

function Begginer({ setSelectedPlant }) {
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

        <Begginer_Crteria />

        <div className="begginer_plants">
          <div className="main_plants_maintext scroll">
            <div className="main_plants_maintext_in">
              <span>"</span>
              <span>mr.Green이 추천하는 초보자를 위한 식물입니다!</span>
              <span>"</span>
            </div>
          </div>
          <div className="main_plants_in scroll">
            {begginerList.map((plant, idx) => (
              <PlantCard
                setSelectedPlant={setSelectedPlant}
                plant={plant}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Begginer;
