import React, { useEffect, useRef, useState } from "react";
import { isValidPassword } from "../../Utils/validCheckForLogin";
import "../../Styles/EditUserInfo.css";
import axios from "axios";

function EditUserInfo({ setEditPwModal, editPwModal }) {

  // const [inputValues, setInputValues] = useState({ oldPw: "", newPw: "", rePw: "" });
  const [checkPsword, setCheckPsword] = useState(false);

  const modalEl = useRef();
  const handleCloseModal = (e) => {
    if (e.target === modalEl.current) {
      setEditPwModal(false);
      document.body.style.overflow = "unset";
    };
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  });

  // --- 비번 검사 기능 구현 ---
  const [inputValues, setInputValues] = useState({
    prevPw: "",
    rePw: "",
    newPw: "",
  });
  const [labelForPw, setLabelForPw] = useState(false);
  const [labelForNewPw, setLabelForNewPw] = useState(false);
  const [lableForRePw, setLabelForRePw] = useState(false);
  const oldPwMsg = [
    "비밀번호는 8글자 이상, 특수 문자를 포함해야 합니다",
    "기존 비밀번호와 일치하지 않습니다",
  ];
  const [oldPwIdx, setOldPwIdx] = useState(0);
  const rePwMsg = [
    "비밀번호는 8글자 이상, 특수 문자를 포함해야 합니다",
    "새로운 비밀번호와 일치하지 않습니다",
  ];
  const [rePwIdx, setRePwIdx] = useState(0);
  const handleInputPw = () => {
    //유효성 검사에 맞는지 확인후(메세지), 인풋밸류 업데이트 + 커서 이동
  };
  const handleInputNewPw = () => {
    // 유효성 검사 맞는지 확인후(메세지), 인풋밸류 업데이트 + 커서이동
  };
  const handleInputRenewPw = () => {
    // 앞의 비번과 맞는지 확인후(메세지), 인풋밸류 업데이트 + 엔터시 버튼 실행
  };
  const handleEditPwBtn = () => {
    // 모든 인풋값이 올바른 상태인지 체크(메세지),
    // 맞다면, 서버요청 patch /user/userinfo {prevPW, newPW}, 성공하면 메세지, 모달창 끔
    //
  };

  const oldPwEnter = (e) => {};
  const newPwEnter = (e) => {};
  const rePwEnter = (e) => {};

  return (
    <div className="edit">
      <div
        className="modal_background"
        onClick={(e) => handleCloseModal(e)}
        ref={modalEl}
      ></div>
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
                onClick={handleInputPw}
                onKeyPress={oldPwEnter}
              ></input>
              {labelForPw ? (
                <label
                  className="edit_label"
                  for="edit_input_prevPw"
                  id="noMatchPw"
                >
                  {oldPwMsg[oldPwIdx]}
                </label>
              ) : (
                <label
                  className="edit_label"
                  for="edit_input_prevPw"
                  id="noMatchPw"
                >
                  &nbsp;
                </label>
              )}
              {/* <label for="edit_input_prevPw" id="invalidPrevPW">
                비밀번호는 8글자 이상, 영문 대문자를 포함해야 합니다
              </label> */}
            </div>
            <div className="edit_input_newPw_set">
              <input
                type="password"
                className="edit_input_newPw"
                placeholder="새로운 비밀번호"
                onClick={handleInputNewPw}
                onKeyPress={newPwEnter}
              ></input>
              {labelForNewPw ? (
                <label
                  className="edit_label"
                  for="edit_input_newPw"
                  id="invalidNewPW"
                >
                  비밀번호는 8글자 이상, 영문 대문자를 포함해야 합니다
                </label>
              ) : (
                <label
                  className="edit_label"
                  for="edit_input_newPw"
                  id="invalidNewPW"
                >
                  &nbsp;
                </label>
              )}
            </div>
            <div className="edit_input_checkNewPw_set">
              <input
                type="password"
                className="edit_input_checkNewPw"
                placeholder="새로운 비밀번호 확인"
                onClick={handleInputRenewPw}
                onKeyPress={rePwEnter}
              ></input>
              {lableForRePw ? (
                <label
                  className="edit_label"
                  for="edit_input_checkNewPw"
                  id="noMatchNewPw"
                >
                  {rePwMsg[rePwIdx]}
                </label>
              ) : (
                <label
                  className="edit_label"
                  for="edit_input_checkNewPw"
                  id="noMatchNewPw"
                >
                  &nbsp;
                </label>
              )}
            </div>
          </div>
          <button className="btn editPwBtn" onClick={handleEditPwBtn}>
            비밀번호 변경
          </button>
        </div>
        <div className="edit_img"></div>
      </div>
    </div>
  );
}

export default EditUserInfo;
