import React from "react";
import "../Styles/Lucky.css";
import Footer from "../Components/Footer";
import PlantCard from "../Components/PlantCard";
import { mainplants } from "../assets/mainplant";
import { desclist } from "../assets/luckyDesclist";
import {luckList, LuckyList} from '../assets/luckyList'

function Lucky({ setSelectedPlant }) {
  return (
    <div className="lucky">
      <div className="lucky_title_background">
        <div className="lucky_title_area">
          <h3 className="lucky_title">행운을 부르는 반려 식물</h3>
          <div className="lucky_subtitle">
            Luck comes to those who look after it
          </div>
          <div className="lucky_desc">mr.Green theme 03 | 2021.10. 04</div>
        </div>
      </div>
      <div className="lucky_intro">
        <div className="lucky_quote" id="quote_left"></div>
        <div className="lucky_mid_text">
          나의 반려식물은 행운도 가져다 준다?! <br />
          믿거나 말거나, 함께 하면 기분좋은 에너지가 넘칠 것 같은
          <br />
          행운의 반려식물을 소개합니다!!
        </div>
        <div className="lucky_quote" id="quote_right"></div>
      </div>
      <div className="lucky_theme_main">
        <ul className="lucky_main_box scroll">
          {desclist.map((li, idx) => (
            <li className="lucky_list_set" key={idx}>
              <div className="lucky_list_title">
                <div className="lucky_number">{li.id}</div>
                <div className="lucky_plant_name">{li.title}</div>
              </div>
              <div className="lucky_list_desc">{li.desc}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lucky_cardList">
        <div className="lucky_card_title_area scroll">
          <div className="lucky_card_subtitle">mr.Green 이 추천하는</div>
          <div className="lucky_card_title">행운을 부르는 반려 식물 </div>
        </div>
        <div className="cardList_container scroll">
          <div className="main_plants_in">
            {LuckyList.map((plant, idx) => (
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

export default Lucky;
