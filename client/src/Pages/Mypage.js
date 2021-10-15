import MenProfile from "../Image/Mypage/Mypage_leon.jpg";
import GirlProfile from "../Image/Mypage/Mypage_matilda.jpg";
import "../Styles/Mypage.css";
import PlantCard from "../Components/PlantCard";
import EditUserInfo from "../Components/Modal/EditUserInfo";

function Mypage({
  favorite,
  setSelectedPlant,
  setEditPwModal,
  editPwModal,
  userInfo,
}) {
  const { nickname, email } = userInfo;
  const handleEditPsWord = () => {
    setEditPwModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="mypage_Containor">
      {editPwModal ? (
        <EditUserInfo
          editPwModal={editPwModal}
          setEditPwModal={setEditPwModal}
        />
      ) : null}
      <div className="mypage_In">
        <div className="mypage">
          <div className="userpage">
            {userInfo.gender === "male" ? (
              <img className="userpage_Photo" src={MenProfile} alt=""></img>
            ) : (
              <img className="userpage_Photo" src={GirlProfile} alt=""></img>
            )}
            <div className="userpage_UserInfo">
              <div className="userpage_NickName">{nickname}</div>
              <div className="userpage_Email">{email}</div>
              <button onClick={handleEditPsWord}>비밀번호 변경</button>
            </div>
          </div>
          <div className="userplant">
            <div className="userplant_Title">My Plant</div>
            <div className="userplant_Plant">
              {favorite.map((plant, idx) => (
                <PlantCard
                  setSelectedPlant={setSelectedPlant}
                  plant={plant}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
