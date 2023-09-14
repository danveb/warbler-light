import { UserAuth } from "../../context/AuthContext";
import { ChatContextP } from "../../context/ChatContext";
import "../../styles/Message.css"; 
import { useEffect, useRef } from "react";
import { calculateMessageDate } from "../../utils";
import { MessageProps } from "../../types";

export default function Message({ message }: MessageProps) {
  // UserAuth
  const { user } = UserAuth(); 
  // ChatContextP
  const { data } = ChatContextP(); 

  // useRef
  const ref = useRef<HTMLDivElement>(null); 

  // useEffect 
  // create a reference on div so that app will scroll to latest message
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [message]); 

  return (
    <div ref={ref} className={`message ${message.senderId === user?.uid && "owner"}`}>
      <div className="message__info">
        {user && data.currentUser && (
          <img 
            src={message.senderId === user?.uid ? user?.photoURL || "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" : data.currentUser?.photoURL || "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"} 
            alt="user profile pic" 
          />
        )}
        <span>{calculateMessageDate(message.date)}</span>
      </div>
      <div className="message__content">
        <p>{message.text}</p>
      </div>
    </div>
  )
}