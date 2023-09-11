import { Message } from "./index"; 
import "../../styles/Messages.css"; 
import { ChatContextP } from "../../context/ChatContext";
import { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Messages() {
  // ChatContextP 
  const { data } = ChatContextP(); 

  // useState
  const [messages, setMessages] = useState<[]>([]); 

  // useEffect
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data()?.messages)
    }); 
    return () => {
      unSub(); 
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((message, id) => (
        <Message message={message} key={id} />
      ))}
    </div>
  )
}