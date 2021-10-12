import React, { useEffect, useRef, useState } from "react";
import { isValidPassword } from "../../Utils/validCheckForLogin";
import "../../Styles/EditUserInfo.css";
import axios from "axios";

function EditUserInfo({ editPwModal, setEditPwModal}) {

  const [dbPassword, setdbPassword] = useState({
    password: "abcde123!"
  })
  const [examineEditpsword, setExamineEditpsword] = useState({
    password: "0"
  });

  // const [inputValues, setInputValues] = useState({ oldPw: "", newPw: "", rePw: "" });
  const [checkPsword, setCheckPsword] = useState(false);

  const modalEl = useRef();
  const handleCloseModal = (e) => {
    if (
      editPwModal &&  
      (!modalEl.current || !modalEl.current.contains(e.target)) 
    ) {
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

  // useEffect(() => {
  //   passwordValidation();
  // }, [editUserPsword.password]);

  // axios({
  //     method: "Patch",
  //     url: `${process.env.REACT_APP_API_URL}/user/userinfo`,
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     withCredentials: true,
  //     data: {
  //       prevPw: editUserPsword.password
  //       newPw: inputValues.
  //     }
  //   }).then((res) => {
  //
  //   })

  // const handleOldPsword = (e) => {
  //   // todo: 기존의 비밀번호와 같게 입력했는지에 대한 유효성 검사
  //   const { value } = e.target;
  //   // console.log(value)
  //   if(!isValidPassword(value)) { 
  //     setCheckPsword(true);
  //   } else {
  //     setCheckPsword(false);
  //   }
  // };

  // const handleNewPsword = (e) => {
  //   // todo: 
  //   const { value } = e.target;
  //   console.log(value)
  //   if (isValidPassword(value)) {
  //     setCheckPsword(false);
  //     // setInputValues({ ...inputValues, [type]: value });
  //   } else {
  //     setCheckPsword(true);
  //   }
  // };

  // const handleRePsword = (e) => {
  //   // todo: 변경된 비밀번호 확인 유효성 검사에 따라 메세지 on,off
  //   const { value } = e.target;
  //   console.log(value)
  //   if (isValidPassword(value)) {
  //     setCheckPsword(false);
  //     // setInputValues({ ...inputValues, [type]: value });
  //   } else {
  //     setCheckPsword(true);
  //   }
  // };



  // const passwordValidation = (e) => {

  //   if (isValidPassword(editUserPsword.password)) {
  //     setExamineEditpsword({ ...examineEditpsword, ["password"]: true });
  //   } else {
  //     setExamineEditpsword({ ...examineEditpsword, ["password"]: false });
  //   }

  //   if (editUserPsword.password.length === 0) {
  //     setExamineEditpsword({ ...examineEditpsword, ["password"]: "0" });
  //   }
  // };

  return (
    <div className="edit">
      <div className="modal_background"></div>
      <div className="edit_modal" ref={modalEl}>
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
                // onChange={(e) => handleOldPsword(e)}
              ></input>
              {checkPsword ? (
                <label className="edit_label" for="edit_input_prevPw" id="noMatchPw">
                  기존 비밀번호와 일치하지 않습니다
                </label>
              ) : (<label for="eidt_input_password">&nbsp;
              </label>
              )}
            </div>
            <div className="edit_input_newPw_set">
              <input
                type="password"
                className="edit_input_newPw"
                placeholder="새로운 비밀번호"
                // onChange={(e) => handleNewPsword(e)}
              ></input>
              {examineEditpsword.password || examineEditpsword.password === "0" ? (
                <label for="signup_input_password">&nbsp;</label>
              ) : (
                <label for="signup_input_password">
                  비밀번호는 8글자 이상, 영문, 특수문자를 포함해야 합니다
                </label>
              )}
            </div>
            <div className="edit_input_checkNewPw_set">
              <input
                type="password"
                className="edit_input_checkNewPw"
                placeholder="새로운 비밀번호 확인"
                // onChange={(e) => handleRePsword(e)}
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
