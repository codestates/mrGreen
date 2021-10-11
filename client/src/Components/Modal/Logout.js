import React, { useState } from 'react';

function Logout() {

    const [logoutModal, setLogoutModal] = useState(true)

    const logoutModalHandle = () => {
        
    }

    const unLogoutModalHandle = () => {

    }
    
    return (
        <div className="logout">
            <div className="logout_Modal">
                <div className="logout_Text">
                    정말 로그아웃 하시겠습니까?
                </div>
                <div className="logout_Button">
                    <button className="logout_Yes" onClick={logoutModalHandle}>네</button>
                    <button className="logout_No" onClick={unLogoutModalHandle}>아니오</button>
                </div>
            </div>
        </div>
    );
}

export default Logout;