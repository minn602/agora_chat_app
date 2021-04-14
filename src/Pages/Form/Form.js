import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db, firebaseApp } from "../../firebase";
import styled from "styled-components";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const Form = () => {
  const [currentTab, setCurrentTab] = useState("Login");
  const [loginStatus, setLoginStatus] = useState(false);
  const [uid, setUid] = useState("");
  const signupInfo = useSelector((state) => state.signupReducer);
  const loginInfo = useSelector((state) => state.loginReducer);

  //자동로그인 기능
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      const uid = (firebaseApp.auth().currentUser || {}).uid;
      if (uid) {
        setLoginStatus(true);
        setUid(uid);
      } else {
      }
    });
  }, []);

  const toggleTab = (evt) => {
    setCurrentTab(evt.target.id);
  };

  const goToSignup = () => {
    setCurrentTab("Signup");
  };

  //signup btn click handler
  const signupHandler = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(signupInfo.email, signupInfo.password)
      .then((user) => {
        const uid = (firebaseApp.auth().currentUser || {}).uid;
        //uid 여부에 따라 상태값 저장하기
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  //login btn click handler
  const loginHandler = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then((user) => {
        const uid = (firebaseApp.auth().currentUser || {}).uid;
        //uid가 생성된 경우의 상태값 지정
        if (uid) {
          alert("로그인 성공 (●'◡'●)");
          setLoginStatus(true);
          setUid(uid);
        }
      })
      .catch((err) => {
        console.error(err);
      });
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

      {currentTab === "Login" ? (
        <Login goToSignup={goToSignup} loginHandler={loginHandler} />
      ) : (
        <Signup signupHandler={signupHandler} />
      )}
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
