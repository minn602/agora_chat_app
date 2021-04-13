import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { signupReducer } from "./signupReducer";

export const rootReducer = combineReducers({ loginReducer, signupReducer });
