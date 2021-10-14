import React from "react";
import SiteInfo from "../Components/Siteinfo/SiteInfo";
import Theme from "../Components/Theme";
import "../Styles/Main.css";
import seola from "../Image/Main/Team/seola.jpg";
import suyeon from "../Image/Main/Team/suyeon.jpeg";
import seungmin from "../Image/Main/Team/seungmin.jpg";
import suyoung from "../Image/Main/Team/suyoung.jpg";
import Footer from "../Components/Footer";
import { mainplants } from "../assets/mainplant";
import PlantCard from "../Components/PlantCard";
import { Link } from "react-router-dom";

function Main({ setSelectedPlant }) {
  return (
    <div className="main_container">
      <SiteInfo />
      <Theme />

      <div className="main_plants">
        <div className="main_plants_maintext scroll">
          <div className="main_plants_maintext_in">
            <span>"</span>
            <span>더 많은 반려식물을 살펴 볼까요?</span>
            <span>"</span>
          </div>
          <Link to="/search">
            <button
              onClick={() => window.scrollTo({ top: 0 })}
              className="main_search"
            >
              Search
            </button>
          </Link>
        </div>
        <div className="main_plants_in scroll">
          {mainplants.map((plant, idx) => (
            <PlantCard
              setSelectedPlant={setSelectedPlant}
              plant={plant}
              key={idx}
            />
          ))}
        </div>
      </div>

      <div className="main_team">
        <div className="main_team_title scroll">
          <div className="main_team_title_bold">mr.Green을 만든 사람들</div>
          <div>
            팀 "ENs”를 소개합니다, 팀원 모두가 MBTI의 EN으로 시작하는 성격인
            공통점을 가지고 있어요
          </div>
          <div>
            물 먹고 쑥쑥 자라는 반려식물처럼 다양한 경험을 양분으로 좋은
            개발자로 성장하고자 노력합니다
          </div>
        </div>

        <div className="main_team_link scroll">
          <div className="main_team_profile">
            <a href="https://github.com/seola25">
              <div className="main_team_profile_img_border">Click</div>
              <img
                src={seola}
                className="main_team_profile_img"
                alt="seola"
              ></img>
            </a>

            <span>김설아</span>
            <span>Front-end</span>
          </div>

          <div className="main_team_profile">
            <a href="https://github.com/kimdlzp">
              <div className="main_team_profile_img_border">Click</div>
              <img
                src={suyoung}
                className="main_team_profile_img"
                alt="suyoung"
              ></img>
            </a>
            <span>김수영</span>
            <span>Back-end</span>
          </div>

          <div className="main_team_profile">
            <a href="https://github.com/shinseungmin-kor">
              <div className="main_team_profile_img_border">Click</div>
              <img
                src={seungmin}
                className="main_team_profile_img"
                alt="seungmin"
              ></img>
            </a>
            <span>신승민</span>
            <span>Front-end</span>
          </div>

          <div className="main_team_profile">
            <a href="https://github.com/Jin-suyeon">
              <div className="main_team_profile_img_border">Click</div>
              <img
                src={suyeon}
                className="main_team_profile_img"
                alt="suyeon"
              ></img>
            </a>
            <span>진수연</span>
            <span>Front-end</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
