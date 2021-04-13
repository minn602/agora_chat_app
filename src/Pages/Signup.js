import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <SignupContainer>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="User name"
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
      />
      <TextField
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
