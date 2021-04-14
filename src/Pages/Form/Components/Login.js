import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginEmail, loginPassword } from "../../../actions";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Login = ({ goToSignup, loginHandler }) => {
  const classes = useStyles();

  const loginVal = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  return (
    <LoginWrapper>
      <TextField
        onChange={(evt) => dispatch(loginEmail(evt.target.value))}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
      />
      <TextField
        onChange={(evt) => dispatch(loginPassword(evt.target.value))}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Password"
        type="password"
      />
      <div>
        <Button onClick={loginHandler} variant="outlined">
          Login
        </Button>
      </div>
      <SignupText>
        Not a member? <strong onClick={goToSignup}>Signup now</strong>
      </SignupText>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupText = styled.p`
  color: #222222;

  strong {
    color: #609beb;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }
`;
