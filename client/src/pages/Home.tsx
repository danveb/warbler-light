import { ConversationPanel } from "../components/Conversation";
import { ChatPanel } from "../components/ChatApp";
import "../styles/Home.css"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Home() {
  // useAuthState 
  const [user] = useAuthState(auth); 

  return (
    <div className="home">
      <div className="home__container">
        <ChatPanel {...user} />
        <ConversationPanel />
      </div>
    </div>
  )
}