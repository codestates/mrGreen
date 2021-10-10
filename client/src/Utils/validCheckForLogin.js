export const isValidPassword = (password) => {
  // todo: password - 특수문자 1개이상 포함, 8자리 이상, 영문자
  let regex = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,24}/;
  return password.match(regex);
};
// 비번 재확인
// export function isSamePassword(password, prevPassword) {
//   return password === prevPassword ? 2 : 1;
// }

export const isValidEmail = (email) => {
  // todo: email 형식에 맞는지 검사
  let regForEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/;
  return email.match(regForEmail);
};
