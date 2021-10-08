import React from "react";
import "../Styles/Lucky.css";
import Footer from "../Components/Footer";

function Lucky(props) {
  const desclist = [
    {
      id: "01",
      title: "행운목",
      desc: `행운을 불러온다는 이름도 "행운"목인 이 식물의 꽃을 본 사람은\n인생에서 다시 오지 않을 행운을 얻는다는 이야기가 있다고 해요\n로또 꽃이라는 별명을 가진 이 식물은 심지어 공기정화, 가습 효과도 있다고 하니\n책상 위에 두고 꽃 피우기를 기다려 볼까요?`,
    },
    {
      id: "02",
      title: "금전수",
      desc: `광택이 있는 둥근 잎이 주렁주렁 달린 모습이 동전을 꿰어 놓은 것 같다하여\n금전수로 불리기 시작했다는 이야기가 있습니다\n금전수 역시 돈이 들어온다는 재물, 행운 관련 속설이 있어서 집들이, 개업 선물로 많이 쓰인다고 합니다`,
    },
    {
      id: "03",
      title: "파키라",
      desc: `가난한 어느 남자가 길가에서 이상한 나무를 발견, 행운이라 여기고 집에서 잘 키운후,\n이 나무를 팔아서 부자가 되었다는 설이 있다고 합니다\n키우면 재물을 불러온다고 서양에서는 '머니트리'라고 불릴 정도로,\n원조 돈나무인 파키라!!  재물운과 행운을 가져다주는 식물로 사랑받고 있습니다`,
    },
    {
      id: "04",
      title: "몬스테라",
      desc: `몬스테라는 북유럽에서 행운의 상징으로 유명합니다\n멋스럽게 갈라진 잎 모양으로 인테리어용으로도 많은 인기를 받고 있어요쉽게 잘 성장하고,\n공기정화에도 탁월하다고 하니, 행운과 멋을 동시에 잡고 싶은 분들은 몬스테라를 반려식물로 들여보세요 `,
    },
    {
      id: "05",
      title: "천냥금",
      desc: `자금우보다는 천냥금이라는 이름으로 많이 알려진 이 식물은, 재물이 들어온다는 행운 식물로 유명합니다\n겨울엔 빨간 열매가 달려 크리스마스 분위기를 느낄 수 있어요`,
    },
  ];

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
        <div className="lucky_quote">"</div>
        <div className="lucky_mid_text">
          나의 반려식물은 ‘꿩먹고 돈먹고?!’ <br />
          믿거나 말거나 함께 하면 기분좋은 에너지가 넘칠 것 같은, <br />
          행운의 반려식물을 소개합니다!!
        </div>
        <div className="lucky_quote">"</div>
      </div>
      <div className="lucky_theme_main">
        <ul className="lucky_main_box">
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
        <div className="lucky_card_title_area">
          <div className="lucky_card_subtitle">mr.Green 이 추천하는</div>
          <div className="lucky_card_title">행운을 부르는 반려 식물 </div>
        </div>
        카드 리스트 들어갈 자리
      </div>
      <Footer />
    </div>
  );
}

export default Lucky;
