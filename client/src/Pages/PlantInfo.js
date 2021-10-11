import { useState } from "react";
import "../Styles/PlantInfo.css";

function PlantInfo({ isLogin, plant }) {
  const [mypageAdd, setMypageAdd] = useState(true);
  const [addPlant, setAddPlant] = useState(false);
  const [deletePlant, setDeletePlant] = useState(false);
  const [afterLogin, setAfterLogin] = useState(false);

  //! 토스트 확인용 함수
  const addMypagePlant = () => {
    if (!isLogin) {
      setAfterLogin(true);
      setTimeout(() => {
        setAfterLogin(false);
      }, 1500);
    } else {
      setAddPlant(true);
      setMypageAdd(false);
      setTimeout(() => {
        setAddPlant(false);
      }, 1500);
    }
  };

  const deleteMypagePlant = () => {
    setDeletePlant(true);
    setMypageAdd(true);
    setTimeout(() => {
      setDeletePlant(false);
    }, 1500);
  };

  return (
    <div className="plant">
      <div className="plant_area">
        <div className={deletePlant ? "toast_change" : "toast"}>
          식물을 삭제하였습니다
        </div>
        <div className={afterLogin ? "toast_change" : "toast"}>
          로그인 후 이용가능 합니다
        </div>
        <div className={addPlant ? "toast_change" : "toast"}>
          식물을 추가하였습니다
        </div>
        <div className="plant_top_area">
          <div className="plant_title_area">
            <div className="plant_name">{plant.eng_name}</div>
            {mypageAdd ? (
              <div onClick={() => addMypagePlant()} className="add_favorite">
                <button className="plusBtn">+</button>
                <div className="plusBtn_desc">추가하기</div>
              </div>
            ) : (
              <div onClick={() => deleteMypagePlant()} className="add_favorite">
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
