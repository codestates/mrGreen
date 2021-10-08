import React, { useState }from 'react';
import PlantCard from './PlantCard';

function UserPlant() {

    const [myPlantList, setMyPlantList] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ]);

    return (
        <div className="userplant_Containor">
            <div className="userplant_In">
                <div className="userplant">
                    <div className="userplant_title">
                    My Plant
                    </div>
                    <div className="userplant_plant">
                    {myPlantList.map((item, index) => {
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
        </div>
    );
}

export default UserPlant;