import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import "../../styles/ChatFriends.css"; 
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatData } from "../../types";


export default function ChatFriends() {
  // UserAuth 
  const { user } = UserAuth(); 

  // useState
  const [chats, setChats] = useState<ChatData>({}); 

  // useEffect
  useEffect(() => {
    const getChats = () => {
      // fetch realtime data with firebase firestore db 
      const unsub = onSnapshot(doc(db, "userChats", user!.uid), (doc) => {
        setChats(doc.data() as ChatData); 
      });
      // cleanup
      return () => {
        unsub(); 
      }
    };
    if(user?.uid) {
      getChats(); 
    }
  }, [user?.uid, user]); 

  // console.log(Object.entries(chats)); 

  return (
    <div className="chatFriends">
      {Object.entries(chats)?.map((chat) => (
        <div className="chatFriends__user" key={chat[0]}>
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