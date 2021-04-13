import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { signupEmail, signupName, signupPassword } from "../actions";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Signup = () => {
  const classes = useStyles();

  const signupVal = useSelector((state) => state.signupReducer);
  const dispatch = useDispatch();

  return (
    <SignupContainer>
      <TextField
        onChange={(evt) => dispatch(signupName(evt.target.value))}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="User name"
      />
      <TextField
        onChange={(evt) => dispatch(signupEmail(evt.target.value))}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
      />
      <TextField
        onChange={(evt) => dispatch(signupPassword(evt.target.value))}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Password"
        type="password"
      />
      <div>
        <Button variant="outlined">Create Account</Button>
      </div>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
