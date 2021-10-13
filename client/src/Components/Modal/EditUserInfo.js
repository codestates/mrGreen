// 비밀번호를 변경하는 컴포넌트 입니다.
import React, { useEffect, useRef, useState } from "react";
import "../../Styles/EditUserInfo.css";
import {
  isSamePassword,
  isValidPassword,
} from "../../Utils/validCheckForLogin";
<<<<<<< Updated upstream
import axios from 'axios';

function EditUserInfo({ setEditPwModal, editPwModal }) {

  const modalEl = useRef(null);
  const cursorNewPw = useRef(null);
  const cursorRePw = useRef(null);

=======

function EditUserInfo({ setEditPwModal, editPwModal }) {
  const modalEl = useRef(null);
  const cursorNewPw = useRef(null);
  const cursorRePw = useRef(null);
>>>>>>> Stashed changes
  const handleCloseModal = (e) => {
    if (e.target === modalEl.current) {
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
  const newPwMsg = [
    "비밀번호는 8글자 이상, 특수 문자를 포함해야 합니다",
    "기존 비밀번호와 일치합니다, 다른 비밀번호를 입력해 주세요",
  ];
  const [newPwIdx, setNewPwIdx] = useState(0);
  const rePwMsg = [
    "비밀번호는 8글자 이상, 특수 문자를 포함해야 합니다",
    "새로운 비밀번호와 일치하지 않습니다",
    "모든 요소는 필수 요소입니다,\n올바른 비밀번호를 입력해 주세요",
  ];
  const [rePwIdx, setRePwIdx] = useState(0);
  const handleInputPw = (e) => {
    //유효성 검사에 맞는지 확인후(메세지), 인풋밸류 업데이트 + 커서 이동
    const { name, value } = e.target;
    if (!isValidPassword(value)) {
      setOldPwIdx(0);
      setLabelForPw(true);
    } else {
      setLabelForPw(false);
      setInputValues({ ...inputValues, [name]: value });
    }
  };
  const handleInputNewPw = (e) => {
    // 유효성 검사 맞는지 확인후(메세지), 인풋밸류 업데이트 + 커서이동
    const { name, value } = e.target;
    if (!isValidPassword(value)) {
      setLabelForNewPw(true);
    } else if (isSamePassword(value, inputValues.prevPw)) {
      setNewPwIdx(1);
      setLabelForNewPw(true);
    } else {
      setNewPwIdx(0);
      setLabelForNewPw(false);
      setInputValues({ ...inputValues, [name]: value });
    }
  };
  const handleInputRenewPw = (e) => {
    // 앞의 비번과 맞는지 확인후(메세지), 인풋밸류 업데이트 + 엔터시 버튼 실행
<<<<<<< Updated upstream
    // console.log("세번째")
    const { name, value } = e.target;
    if (!isValidPassword(value)) {
      // console.log("유효성")
=======
    console.log("세번째");
    const { name, value } = e.target;
    if (!isValidPassword(value)) {
      console.log("유효성");
>>>>>>> Stashed changes

      setRePwIdx(0);
      setLabelForRePw(true);
    } else if (!isSamePassword(value, inputValues.newPw)) {
<<<<<<< Updated upstream
      // console.log("새로운거랑 같냐")
=======
      console.log("새로운거랑 같냐");
>>>>>>> Stashed changes

      setRePwIdx(1);
      setLabelForRePw(true);
    } else {
<<<<<<< Updated upstream
      // console.log("다통과 상태저장")
=======
      console.log("다통과 상태저장");
>>>>>>> Stashed changes
      setLabelForRePw(false);
      setInputValues({ ...inputValues, [name]: value });
    }
  };
  const handleEditPwBtn = (e) => {
    // 모든 인풋값이 올바른 상태인지 체크(메세지),
    // 맞다면, 서버요청 patch /user/userinfo {prevPW, newPW}, 성공하면 메세지, 모달창 끔
    const { prevPw, newPw, rePw } = inputValues;
    if (!prevPw || !newPw || !rePw) {
      setRePwIdx(2);
      setLabelForRePw(true);
    } else {
      // 맞다면, patch /user/userinfo 비밀번호 요청
      // 응답값에 따라 기존 비밀 번호와 다르다는 응답이면, setOldPwIdx(1), setLabelForOldPw(true)
<<<<<<< Updated upstream

      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/user/userinfo`,
          {
            prevPw: inputValues.prevPw,
            newPw: inputValues.newPw,
          },
          {
            headers: {
              // Authorization: ,
              "Content-Type": "application/json"
            },
            withCredentials: true
          },
        )
        .then((res) => {
          if(res.status === 200){
          console.log(res.data.message);
            
          // setEditPwModal(false);
          // alert("비밀번호 변경이 완료되었습니다.")
          }
        })
        .catch((err) => alert("다시한번확인해 주세요", err));
=======
>>>>>>> Stashed changes
    }
  };

  const oldPwEnter = (e) => {
    if (!labelForPw && e.key === "Enter") {
      cursorNewPw.current.focus();
    }
  };
  const newPwEnter = (e) => {
    if (!labelForNewPw && e.key === "Enter") {
      cursorRePw.current.focus();
    }
  };
  const rePwEnter = (e) => {
    if (!lableForRePw && e.key === "Enter") {
      handleEditPwBtn();
    }
  };

  return (
    <div className="edit">
      <div
        className="edit_background"
        onChange={(e) => handleCloseModal(e)}
        ref={modalEl}
      ></div>
      <div className="edit_modal">
        <div className="edit_modal_leftside">
          <div className="edit_title">비밀번호 변경</div>
          <div className="edit_input_area">
            <div className="edit_input_prevPw_set">
              <input
                name="prevPw"
                type="password"
                className="edit_input_prevPw"
                placeholder="기존 비밀번호"
                onChange={(e) => handleInputPw(e)}
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
            </div>
            <div className="edit_input_newPw_set">
              <input
                name="newPw"
                type="password"
                className="edit_input_newPw"
                placeholder="새로운 비밀번호"
                onChange={(e) => handleInputNewPw(e)}
                onKeyPress={newPwEnter}
                ref={cursorNewPw}
              ></input>
              {labelForNewPw ? (
                <label
                  className="edit_label"
                  for="edit_input_newPw"
                  id="invalidNewPW"
                >
                  {newPwMsg[newPwIdx]}
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
                name="rePw"
                type="password"
                className="edit_input_checkNewPw"
                placeholder="새로운 비밀번호 확인"
                onChange={(e) => handleInputRenewPw(e)}
                onKeyPress={rePwEnter}
                ref={cursorRePw}
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
