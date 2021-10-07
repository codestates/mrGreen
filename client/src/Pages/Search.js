import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SearchBar from '../Components/Search/SearchBar';
import SearchBtn from '../Components/Search/SearchBtn';
import '../styles/Search.css';

function Search() {
    return (
        <>
        <BrowserRouter>
          <div className="searchBarBtn">
           <SearchBar />
           <SearchBtn />
          </div>
        </BrowserRouter>
        </>
    );
}

export default Search;