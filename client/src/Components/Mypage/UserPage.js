import React from 'react';
import profile from '../../Image/Mypage/Mypage_leon.jpg'
import '../../Styles/Mypage.css';

function UserPage() {
    return (
        <div className="userpage_Containor">
            <div className="userpage">
            <div className="userpage_photo">
                <img src={profile}></img>
            </div>
            <div className="userpage_userinfo">
                <div className="userpage_nickname">Kimcoding</div>
                <div className="userpage_email">Kimcoding@gmail.com</div>
                <button>비밀번호 변경</button>
            </div>
            </div>
        </div>
    );
}

export default UserPage;