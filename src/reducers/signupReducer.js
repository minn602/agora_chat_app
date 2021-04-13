const initState = {
  userName: "",
  email: "",
  password: "",
};

export const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "SIGNUP_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SIGNUP_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};
