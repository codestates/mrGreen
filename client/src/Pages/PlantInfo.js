/* eslint-disable */
import axios from "axios";
import { useState } from "react";
import "../Styles/PlantInfo.css";

function PlantInfo({
  isLogin,
  plant,
  setFavorite,
  userInfo,
  isFavorite,
  setIsFavorite,
  accessToken,
}) {
  const [toastOn, setToastOn] = useState(false);
  const [toastIdx, setToastIdx] = useState(0);
  const toastMsg = [
    "로그인 후 이용 하실 수 있습니다",
    "식물을 삭제하였습니다",
    "식물을 추가하였습니다",
    "서버 오류입니다, 다시 시도해주세요",
    "이미 추가된 식물입니다",
  ];

  const getFavorite = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/favorite`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        setFavorite(res.data.favorite);
      }
    });
  };

  const handleAddFavorite = () => {
    setIsFavorite(false);
    // 로그인 상태가 아닐때, 토스트 "로그인 후 이용"
    // 로그인 상태일 때
    // 유저의 즐겨찾기 정보에 해당 플랜트가 없을 때, axios 추가요청 후 성공시 -> 토스트 "추가됨"
    // 유저의 즐겨찾기 정보에 해당 플랜트가 있을 때, 토스트 "이미 추가한 식물"
    if (!isLogin) {
      setToastIdx(0);
      setToastOn(true);
      setTimeout(() => {
        setToastOn(false);
      }, 1500);
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/favorite/${plant.id}`,
        data: { userId: userInfo.id },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            getFavorite();
            setToastIdx(2);
            setToastOn(true);
            setTimeout(() => {
              setToastOn(false);
            }, 1500);
          } else {
            setToastIdx(4);
            setToastOn(true);
            setTimeout(() => {
              setToastOn(false);
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDelFavorite = () => {
    // axios 삭제 요청 후 성공시 -> 토스트 "삭제되었습니다"
    setIsFavorite(true);

    axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/favorite/${plant.id}`,
      data: { userId: userInfo.id },
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          getFavorite();
          setToastIdx(1);
          setToastOn(true);
          setTimeout(() => {
            setToastOn(false);
          }, 1500);
        } else {
          setToastIdx(3);
          setToastOn(true);
          setTimeout(() => {
            setToastOn(false);
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="plant">
      <div className="plant_area">
        <div className={toastOn ? "toast_change" : "toast"}>
          {toastMsg[toastIdx]}
        </div>

        <div className="plant_top_area">
          <div className="plant_title_area">
            <div className="plant_name">{plant.eng_name}</div>
            {!isLogin || isFavorite ? (
              <div onClick={handleAddFavorite} className="add_favorite">
                <button className="plusBtn">+</button>
                <div className="plusBtn_desc">추가하기</div>
              </div>
            ) : (
              <div onClick={handleDelFavorite} className="add_favorite">
                <button className="plusBtn">-</button>
                <div className="plusBtn_desc">삭제하기</div>
              </div>
            )}
          </div>
        </div>

        <div className="plant_bottom_area">
          <div className="plant_container">
            <div className="plant_img_box">
              <img
                className="plant_plantImg"
                alt="plant"
                src={require(`../Image/PlantList/${plant.image}`).default}
              />
            </div>
            <div className="plant_info">
              <div className="plant_info_names">
                <div>{plant.kor_name}</div>
              </div>
              <div className="plant_info_desc">{plant.description}</div>
              <div className="plant_info_mid">
                <div className="plant_info_mid_in">
                  <span className="plant_category">{"꽃말"}</span>
                  <span className="plant_content">{plant.means}</span>
                </div>
                <div className="plant_info_mid_in">
                  <span className="plant_category">{"난이도"}</span>
                  <span className="plant_content">{plant.difficulty}</span>
                </div>
                <div className="plant_info_mid_in">
                  <span className="plant_category">{"물주는 횟수"}</span>
                  <span className="plant_content">{plant.water}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plant_blank_space"></div>
      </div>
    </div>
  );
}

export default PlantInfo;
