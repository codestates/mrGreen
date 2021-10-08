import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from '../Components/Footer';
import PlantCard from '../Components/Mypage/PlantCard';
import '../Styles/Search.css';
import '../Styles/PlantCard.css';

function Search() {

  const [searchPlantList, setSearchPlantList] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 }
  ]);

    return (
      <div className="search_Containor">
        <div className="search_In">
          <div className="searchBarBtn">
                <input 
                  className="searchBar"
                  type="text"
                  placeholder="어떤 식물을 찾으시나요?"
                ></input>
                <button className="searchBtn">Search</button>
          </div>

          <div className="searchPlant">
            {searchPlantList.map((item, index) => {
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
    );
}

export default Search;