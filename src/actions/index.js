//login actions
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

export const signupName = (val) => {
  return {
    type: "SIGNUP_NAME",
    payload: val,
  };
};

export const signupEmail = (val) => {
  return {
    type: "SIGNUP_EMAIL",
    payload: val,
  };
};

export const signupPassword = (val) => {
  return {
    type: "SIGNUP_PASSWORD",
    payload: val,
  };
};
