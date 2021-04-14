import React, { useEffect, useState } from "react";
import { db, firebaseApp } from "./firebase";

function App() {
  const [chats, setChats] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [uid, setUid] = useState("");

  //db불러오는방법
  useEffect(() => {
    const chatRef = db.collection("chat");
    console.log(chatRef);
    chatRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(data);
    });
  }, []);

  //chat을 db에 추가하는 함수
  const addDocument = (content) => {
    db.collection("caht")
      .add({
        //user가 로그인하게 되면 유저는 특정한 키값을 가지게된다(firebase로 issue하게 되면 구글이 발행해줌)
        // uid: "skdlakdaodi",
        content: content,
      })
      .then();
  };

  return <div className="App"></div>;
}

export default App;
