import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { ChatContextP } from "../../context/ChatContext";
import "../../styles/MessageInput.css"; 
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid"; 

export default function MessageInput() {
  // UserAuth
  const { user } = UserAuth(); 
  // ChatContextP
  const { data } = ChatContextP(); 

  // useState
  const [text, setText] = useState(""); 

  // handleSend 
  const handleSend = async (): Promise<void> => {
    if(text.length !== 0) {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(), 
          text,
          senderId: user?.uid, 
          date: Timestamp.now(), 
        })
      })
  
      // updateDoc for userChats on user
      await updateDoc(doc(db, "userChats", user!.uid), {
        [data.chatId + ".lastMessage"]:{
          text, 
        }, 
        [data.chatId + ".date"]: serverTimestamp()
      });
  
      // updateDoc for userChats on currentUser
      await updateDoc(doc(db, "userChats", data.currentUser!.uid), {
        [data.chatId + ".lastMessage"]:{
          text, 
        }, 
        [data.chatId + ".date"]: serverTimestamp()
      });

      setText(""); 
    }   
  }

  return (
    <div className="messageInput">
      <input 
        type="text"
        placeholder="Say something nice..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="messageInput__send">
        <button className="messageInput--btn" onClick={handleSend}>warble</button>
      </div>
    </div>
  )
}