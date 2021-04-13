import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";

const Form = () => {
  const [currentTab, setCurrentTab] = useState("Login");

  const toggleTab = (evt) => {
    setCurrentTab(evt.target.id);
  };

  const goToSignup = () => {
    setCurrentTab("Signup");
  };

  return (
    <Wrapper>
      <TabContainer>
        <Tab currentTab={currentTab} id="Login" onClick={toggleTab}>
          Log In
        </Tab>
        <Tab currentTab={currentTab} id="Signup" onClick={toggleTab}>
          Sign Up
        </Tab>
      </TabContainer>

      {currentTab === "Login" ? <Login goToSignup={goToSignup} /> : <Signup />}
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Tab = styled.div`
  width: 50%;
  padding: 7px;
  background-color: ${(props) =>
    props.id === props.currentTab ? "#609beb" : "#fff"};
  text-align: center;
  color: ${(props) => (props.id === props.currentTab ? "#fff" : "#222222")};

  &:hover {
    cursor: pointer;
  }
`;
