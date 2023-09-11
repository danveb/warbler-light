import { Timestamp } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { ChatContextP } from "../../context/ChatContext";
import "../../styles/Message.css"; 
import { useEffect, useRef } from "react";

export interface MessageProps {
  message: {
    date: Timestamp; 
    id: string; 
    senderId: string; 
    text: string; 
    img: string; 
  }; 
}

export default function Message({ message }: MessageProps) {
  // UserAuth
  const { user } = UserAuth(); 
  // ChatContextP
  const { data } = ChatContextP(); 

  // useRef
  const ref = useRef<HTMLDivElement>(null); 

  // useEffect 
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [message]); 

  return (
    <div className={`message ${message.senderId === user?.uid && "owner"}`}>
      <div className="message__info">
        {user && user.photoURL && (
          <img src={message.senderId === user?.uid ? user?.photoURL : data.currentUser?.photoURL} alt="" />
        )}
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>{message.text}</p>
        {/* <img src="https://images.unsplash.com/photo-1563718944-758794a56b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" /> */}
        {message.img && (
          <img src={message.img} alt="an image from user" />
        )}
      </div>
    </div>
  )
}