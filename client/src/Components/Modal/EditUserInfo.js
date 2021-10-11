// 비밀번호를 변경하는 컴포넌트 입니다.

import React, { useEffect, useRef } from "react";
import "../../Styles/EditUserInfo.css";

function EditUserInfo({ setEditPwModal, editPwModal }) {

  const modalEl = useRef();

  const handleCloseModal = (e) => {
    if (
      editPwModal &&  
      (!modalEl.current || !modalEl.current.contains(e.target)) 
    ) {
      setEditPwModal(false); 
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {  
    window.addEventListener("click", handleCloseModal); 
    return () => {
      window.removeEventListener("click", handleCloseModal); 
    };
  });

  return (
    <div className="edit">
      <div className="modal_background"></div>
      <div className="edit_modal">
        <div className="edit_modal_leftside">
          {/* 비밀번호 변경 타이틀 */}
          <div className="edit_title">비밀번호 변경</div>
          <div className="edit_input_area">
            <div className="edit_input_prevPw_set">
              {/* 비밀번호타입으로 텍스트를 입력한다, 이렇게 하면 텍스트가 *로 적힌다. */}
              <input
              type="password" 
                className="edit_input_prevPw"
                placeholder="기존 비밀번호"
              ></input>
              <label className="edit_label" for="edit_input_prevPw" id="noMatchPw">
                기존 비밀번호와 일치하지 않습니다
              </label>
              {/* <label for="edit_input_prevPw" id="invalidPrevPW">
                비밀번호는 8글자 이상, 영문 대문자를 포함해야 합니다
              </label> */}
            </div>
            <div className="edit_input_newPw_set">
              <input
                type="password"
                className="edit_input_newPw"
                placeholder="새로운 비밀번호"
              ></input>
              <label className="edit_label" for="edit_input_newPw" id="invalidNewPW">
                비밀번호는 8글자 이상, 영문 대문자를 포함해야 합니다
              </label>
            </div>
            <div className="edit_input_checkNewPw_set">
              <input
                type="password"
                className="edit_input_checkNewPw"
                placeholder="새로운 비밀번호 확인"
              ></input>
              <label className="edit_label" for="edit_input_checkNewPw" id="noMatchNewPw">
                새로운 비밀번호와 일치하지 않습니다
              </label>
            </div>
          </div>
          <button className="btn editPwBtn">비밀번호 변경</button>
        </div>
        <div className="edit_img"></div>
      </div>
    </div>
  );
}

export default EditUserInfo;
