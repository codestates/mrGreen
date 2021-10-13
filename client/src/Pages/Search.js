import React, { useEffect, useState } from "react";
import PlantCard from "../Components/PlantCard";
import "../Styles/Search.css";
import "../Styles/PlantCard.css";
import { searchplants } from "../assets/searchplants";
import axios from "axios";

function Search({ setSelectedPlant, isLoading, setIsLoading, plantList }) {
  const [searchValue, setSearchValue] = useState("");
  const [allPlantList, setAllPlantList] = useState(plantList);
  const [searchPlantList, setsearchPlantList] = useState(plantList);
  const [morePlantList, setMorePlantList] = useState(plantList.slice(0, 18));

  //! 서버에서 식물전체리스트 받는 useEffect
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios({
  //     method: "GET'",
  //     url: `${process.env.REACT_APP_API_URL}/plantlist`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     withCredentials: true,
  //   }).then((res) => setAllPlantList(res.data));
  //   setIsLoading(false);
  // }, []);

  //! 버튼 클릭했을 때 필터링 되는 함수
  const searchPlantClick = () => {
    if (searchValue.length === 0) {
      setsearchPlantList([]);
      setMorePlantList(allPlantList.slice(0, 18));
    } else {
      let filterPlants = allPlantList.filter((plant) =>
        plant.kor_name.replace(/ /g, "").match(searchValue)
      );

      setsearchPlantList(filterPlants);
      setMorePlantList(filterPlants.slice(0, 18));
    }
  };

  //! 더보기 버튼 눌렀을 때 더 보여주는 함수
  const morePlantlistHandler = () => {
    if (searchPlantList.length > morePlantList.length) {
      setMorePlantList(searchPlantList.slice(0, morePlantList.length + 18));
    } else {
      setMorePlantList(allPlantList.slice(0, morePlantList.length + 18));
    }
  };

  return (
    <div className="search_Containor">
      <div className="search_In">
        <div className="searchBarBtn">
          <input
            onKeyPress={(e) => (e.key === "Enter" ? searchPlantClick() : null)}
            onChange={(e) => setSearchValue(e.target.value)}
            className="searchBar"
            type="text"
            placeholder="어떤 식물을 찾으시나요?"
          ></input>
          <button onClick={() => searchPlantClick()} className="searchBtn">
            Search
          </button>
        </div>

        <div className="searchPlant">
          {morePlantList.map((plant, index) => {
            return (
              <PlantCard
                setSelectedPlant={setSelectedPlant}
                key={index}
                plant={plant}
              />
            );
          })}
        </div>

        {morePlantList.length === 0 ? (
          <div className="search_have_none_plants">
            <span>찾는 식물이 존재하지 않습니다</span>
          </div>
        ) : null}

        {morePlantList.length === allPlantList.length ||
        morePlantList.length === 0 ||
        searchPlantList.length === morePlantList.length ? (
          <div className="search_have_none_plants_blank"></div>
        ) : (
          <div className="search_more_plant">
            <button onClick={() => morePlantlistHandler()}>더보기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
