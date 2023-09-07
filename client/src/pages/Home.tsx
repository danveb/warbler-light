import { ConversationPanel } from "../components/Conversation";
import { ChatPanel } from "../components/ChatApp";
import "../styles/Home.css"; 

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">  
        <ChatPanel />
        <ConversationPanel />
      </div>
    </div>
  )
}