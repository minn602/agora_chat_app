export const loginEmail = (val) => {
  return {
    type: "LOGIN_EMAIL",
    payload: val,
  };
};

export const loginPassword = (val) => {
  return {
    type: "LOGIN_PASSWORD",
    payload: val,
  };
};
