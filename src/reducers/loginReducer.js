const initState = {
  email: "",
  password: "",
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "LOGIN_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};
