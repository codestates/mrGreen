import React from 'react';
import img1 from '../../Image/PlantList/001_Monstera.jpg'
import img2 from '../../Image/PlantList/001_Monstera.jpg'
import img3 from '../../Image/PlantList/001_Monstera.jpg'
import '../../styles/Mypage.css';

function PlantList() {
    return (
        <>
        <div className="plantList">
            <img src={img1}></img>
            <div className="plantList_text">
                팔레아 페페로미오데스
            </div>
            <div className="plantList_subText">
                Missionary Plant
            </div>
        </div>
        </>
    );
}

export default PlantList