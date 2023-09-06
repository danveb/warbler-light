import { ConversationPanel } from "../components/Conversation";
import { ChatPanel } from "../components/ChatApp";
import "../styles/Home.css"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // useAuthState 
  const [user] = useAuthState(auth); 

  // useNavigate
  const navigate = useNavigate(); 

  // useEffect
  // useEffect(() => {
  //   if(!user) {
  //     navigate("/register"); 
  //   }
  // }, [navigate, user]); 

  console.log(user); 

  return (
    <div className="home">
      <div className="home__container">  
        <ChatPanel />
        <ConversationPanel />
      </div>
    </div>
  )
}