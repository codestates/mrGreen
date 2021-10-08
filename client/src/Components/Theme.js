import React from "react";
import "../Styles/Theme.css";
import { Link } from "react-router-dom";

function Theme() {
  return (
    <div className="theme_container">
      <div className="theme_in">
        <div className="theme_title">
          <span className="theme_title_comma">"</span>
          <span>다양한 식물 추천 테마를 둘러보세요</span>
          <span className="theme_title_comma">"</span>
        </div>

        <div className="theme_box scroll">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/interior"
            className="theme_link"
          >
            <div className="theme_link_in">#인테리어</div>
          </Link>

          <div className="theme_box_explain">
            <div>원하시는 테마를</div>
            <div>클릭해 보세요</div>
          </div>

          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/begginer"
            className="theme_link"
          >
            <div className="theme_link_in">#초보자</div>
          </Link>

          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/lucky"
            className="theme_link"
          >
            <div className="theme_link_in">#행운</div>
          </Link>

          <div className="theme_link">
            <div className="theme_link_in">
              <div>#공기정화</div>
              <div>To be continue</div>
            </div>
          </div>

          <div className="theme_link">
            <div className="theme_link_in">
              <div>#이사</div>
              <div>To be continue</div>
            </div>
          </div>

          <div className="theme_link">
            <div className="theme_link_in">
              <div>#MBTI</div>
              <div>To be continue</div>
            </div>
          </div>

          <div className="theme_box_explain">
            <div>mr.Green의</div>
            <div>다양한 테마가</div>
            <div>계속됩니다</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
