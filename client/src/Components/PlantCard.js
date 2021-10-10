import React from 'react';
import img1 from '../Image/PlantList/001_Monstera.jpg'
import '../Styles/PlantCard.css';

function PlantCard() {
    return (
        <>
            {/* 목업 코드 */}
            <div className="plantCard">
                <img src={img1}></img>
                <div className="plantCard_text">
                    팔레아 페페로미오데스
            </div>
                <div className="plantCard_subText">
                    Missionary Plant
            </div>
            </div>

            {/* 기능 추가 시 사용할 코드 */}
            {/* 
            <div key={item.id} className="plantCard">
            <img src={item.image} alt={item.name}></img>
            <div className="plantCard_text">
                {item.kor_name}
            </div>
            <div className="plantCard_subText">
                {item.eng_name}
            </div>
        </div> 
        */}
        </>
    );
}

export default PlantCard;