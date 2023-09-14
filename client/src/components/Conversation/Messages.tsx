import { useEffect, useState } from "react";
import { ChatContextP } from "../../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { Message } from "./index"; 
import "../../styles/Messages.css"; 

export default function Messages() {
  // UserAuth 
  const { user } = UserAuth(); 
  // ChatContextP 
  const { data } = ChatContextP(); 

  // useState
  const [messages, setMessages] = useState<[]>([]); 

  // useEffect
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data()?.messages)
    }); 
    return () => {
      unsubscribe(); 
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.length > 0 ? messages.map((message, id) => (
        <Message message={message} key={id} />
      )) : (
        <div className="message owner">
          <div className="message__info">
            <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" alt="" />
            <span>Just now</span>
          </div>
          <div className="message__content">
            {user === null ? (
              <p>Welcome to warbler. Please login to start warbling with your friends.</p>
            ) : (
              <p>Glad to have you back {user.displayName} 😀</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}