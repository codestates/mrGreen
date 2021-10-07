import React, { useState }from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import UserPage from '../Components/Mypage/UserPage';
import UserPlant from '../Components/Mypage/UserPlant';
import '../styles/Mypage.css';

function Mypage() {

    return (
        <BrowserRouter>
            <div className="user_PagePlant">
                <UserPage />
                <UserPlant />
            </div>
        </BrowserRouter>
    );
}

export default Mypage;