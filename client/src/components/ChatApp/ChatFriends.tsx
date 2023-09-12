import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import "../../styles/ChatFriends.css"; 
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatData } from "../../types";
import { ChatContextP } from "../../context/ChatContext";
import { User } from "firebase/auth";

export default function ChatFriends() {
  // UserAuth 
  const { user } = UserAuth(); 
  // ChatContextP 
  const { dispatch } = ChatContextP(); 

  // useState
  const [chats, setChats] = useState<ChatData>({}); 

  // useEffect
  useEffect(() => {
    const getChats = () => {
      // fetch realtime data with firebase firestore db 
      const unsubscribe = onSnapshot(doc(db, "userChats", user!.uid), (doc) => {
        setChats(doc.data() as ChatData); 
      });
      // cleanup
      return () => {
        unsubscribe(); 
      }
    };
    if(user?.uid) {
      getChats(); 
    }
  }, [user?.uid, user]); 

  // handleSelect
  const handleSelect = (u: User) => {
    dispatch({ type: "CHANGE_USER", payload: u})
  }

  return (
    <div className="chatFriends">
      {Object.entries(chats)?.sort((a, b) => b[1].date?.seconds - a[1].date?.seconds).map((chat) => (
        <div className="chatFriends__user" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo as User)}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="chatFriends__user--info">
            <h3>{chat[1].userInfo.displayName}</h3>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}