import React, { useState } from 'react';
import Footer from '../Components/Footer';
import PlantCard from '../Components/Mypage/PlantCard';
import img1 from '../Image/Theme/Interior/interior_1.jpeg';
import img2 from '../Image/Theme/Interior/interior_2.jpeg';
import img3 from '../Image/Theme/Interior/interior_3.jpeg';
import img4 from '../Image/Theme/Interior/interior_4.jpeg';

import '../Styles/Interior.css';

function Interior() {

    const [interiorPlant, setInteriorPlant] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ]);

    return (
        <div className="interior_Containor">
            <div className="interior_In">
                <div className="interior_Title">
                    <div className="interior_SubTitle">
                        Today` s Pick!!
                    </div>
                    <div className="interior_MainTitle">
                        Interior & Plant
                    </div>
                </div>
                <div className="interior_Main">
                    <div className="interior_Text">
                    <div className="interior_MainText">
                        많은 사람들이 인테리어의 포인트로 조경을 선택합니다. 왤까요??<br/>
                        인위적인 공간과 유기체의 조합에 공간이 생기를 갖게되기 때문이죠.<br/>

                        실제로도 자칫 딱딱해 보일 수 있는 공간에 싱그러운 초록빛과<br/>
                        알록달록한 꽃들이 자리하면 그 분위기는 몇배는 증폭됩니다.<br/>

                        요즘은 단순한 관상용을 넘어서 식물 자체에서 내뿜는 좋은 기능들을 보고<br/>
                        내집에 하나쯤은 두고 싶다고 생각을 하는데요~<br/>
                    </div>
                    <div className="interior_SubText">
                        오늘의 Pick을 담당한 인테리어 전공자 출신 Seungmin 개발자가 추천하는<br/>
                        다양한 인테리어디자인에 어울릴 식물들을 소개합니다!<br/>
                    </div>
                    </div>
                    <img className="interior_MainImage" src={img1}></img>
                </div>
                <div className="intreior_HowTo">How to design?</div>
                <div className="interior_Wood">
                    <img className="interior_WoodImage" src={img2}></img>
                    <div className="interior_WoodText">
                    <div className="interior_WoodMainText">
                        Wood + Plant
                    </div>
                    <div className="interior_WoodSubText">
                        가장 이상적인 조화!<br/>
                        어디에 두어도 잘 어울리지만<br/>
                        그래도 나무와 식물의 조화엔 안되겠죠?<br/>

                        우드소재로 이루어진 가구나 공간 주변에<br/>
                        푸릇한 조경을 추가함으로써<br/>
                        자연을 그대로 담아 가져온듯한<br/>
                        분위기를 연출 할 수 있습니다.<br/>

                        우드의 브라운 컬러와 잘 어우러질<br/>
                        그린 컬러의 식물류를 배치할 것을 추천합니다!<br/>
                    </div>
                    </div>
                </div>
                <div className="interior_Wood">
                    <div className="interior_WoodText">
                    <div className="interior_WoodMainText">
                        Modern + Plant
                    </div>
                    <div className="interior_WoodSubText">
                            시크한 모던스타일의 인테리어는<br/>
                            젊은층에게 인기가 많습니다.<br/>

                            하지만 무채색의 모던스타일 공간은<br/>
                            단순하거나 무거울 수 있습니다.<br/>
                            생명이 있는 조경을 배치해서<br/>
                            무거웠던 공간에 살짝 생명력을<br/>
                            불어넣어 줄 수 있을겁니다.<br/>
                    </div>
                    </div>
                    <img className="interior_WoodImage" src={img3}></img>
                </div>

                <div className="interior_Wood">
                    <img className="interior_WoodImage" src={img4}></img>
                    <div className="interior_WoodText">
                    <div className="interior_WoodMainText">
                        Everywhere + Plant
                    </div>
                        <div className="interior_WoodSubText">
                            이런저런 추천을 했지만<br/>
                            사실 자연을 품은 조경은<br/>
                            사람이 디자인한 공간이라면<br/>
                            어디든지 녹아들 수 있습니다.<br/>

                            추천도 좋지만 가끔은<br/>
                            직접 꾸며보는것도 좋은 방법입니다!<br/>
                        </div>
                    </div>
                </div>
                <div className="interior_Plant">
                    <div className="interior_PlantListTitle">
                       <div className="interior_PlantListMainTitle">mr.Green이 추천하는</div>
                       <div className="interior_PlantListMainTitle">인테리어디자인 에 어울리는 식물</div>
                    </div>
                    <div className="interior_PlantList">
                        {interiorPlant.map((item, index) => {
                            return (
                                <PlantCard
                                    key={index}
                                    item={item}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
                <Footer />
        </div>
    );
}

export default Interior;