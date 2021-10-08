import React from "react";

function SiteInfo_01() {
  //! 테마 위치로 이동하는 함수
  const srollmoveTheme = () => {
    window.scrollTo({ top: 740 });
  };

  return (
    <div className="siteinfo01_container">
      <div className="siteinfo01_in">
        <div className="siteinfo01_text">
          <img src="siteinfo/SiteInfo_leonIcon.png" alt="leon.png" />
          <h1>당신만의 반려식물을 찾아보세요</h1>
          <div className="siteinfo01_text_in">
            <div>
              당신을 위한 식물 큐레이터 mr.Green이 반려 식물을 추천해 드립니다
            </div>
            <div>
              다양한 테마별 식물 추천 목록을 살펴보고, 마음에 드는 식물 정보도
              확인해 보세요
            </div>
            <div>
              언제나 화분을 곁에 두던 레옹처럼, mr.Green은 여러분의 곁에 특별한
              반려식물이 함께 하도록 도와드리겠습니다
            </div>
          </div>
          <button onClick={() => srollmoveTheme()}>테마 둘러보기</button>
        </div>
      </div>
    </div>
  );
}

export default SiteInfo_01;
