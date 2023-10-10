// 닉네임 유효성 검사
// 길이 2~20, 영어, 한국어, 숫자
export const validatename = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("닉네임은 필수 항목입니다."));
  }
  if (/\s/.test(value)) {
    return Promise.reject(new Error("닉네임은 공백을 포함 할 수 없습니다"));
  }
  const nicknameLength = value.length;
  if (nicknameLength < 2 || nicknameLength >= 20) {
    return Promise.reject(
      new Error("한글 1~10자, 영문 및 숫자 2~20자까지 입력해주세요")
    );
  }
  return Promise.resolve();
};
//레벨 유효성 검사
export const validateLevel = (_, value) => {
  const regExp = /^[0-9]+$/;
  if (!value) {
    return Promise.reject(new Error("레벨은 필수 항목입니다."));
  }
  if (!value.match(regExp)) {
    return Promise.reject(new Error("숫자로만 이루어진 형식이 아닙니다."));
  }
  return Promise.resolve();
};
//직업 선택 유효성 검사
export const jobValidate = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("직업를 선택해주세요"));
  }
  return Promise.resolve();
};
