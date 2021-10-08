import React from 'react';
import img1 from '../../Image/PlantList/001_Monstera.jpg'
import '../../Styles/PlantCard.css';

function PlantCard() {
    return (
        <>
        <div className="plantCard">
            <img src={img1}></img>
            <div className="plantCard_text">
                팔레아 페페로미오데스
            </div>
            <div className="plantCard_subText">
                Missionary Plant
            </div>
        </div>
        </>
    );
}

export default PlantCard;