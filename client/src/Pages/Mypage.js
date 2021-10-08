import React, { useState }from 'react';
import Footer from '../Components/Footer';
import UserPage from '../Components/Mypage/UserPage';
import UserPlant from '../Components/Mypage/UserPlant';
import '../Styles/Mypage.css';

function Mypage() {

    return (
        <div>
            <div className="user_PagePlant">
                <UserPage />
                <UserPlant />
            </div>
        </div>
    );
}

export default Mypage;