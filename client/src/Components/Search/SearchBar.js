import React from 'react';
import '../../Styles/Mypage.css';

function SearchBar() {
    return (
        <div className="searchBar">
            <input 
            type="text"
            placeholder="어떤 식물을 찾으시나요?"
            ></input>
        </div>
    );
}

export default SearchBar;    