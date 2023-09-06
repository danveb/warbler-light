import { ChatFriends, ChatNav, ChatSearch } from "./index"; 
import "../../styles/ChatPanel.css"; 
// import { UserProps } from "../../types"; 

export default function ChatPanel() {
  return (
    <div className="chatPanel">
      <ChatNav />
      <ChatSearch />
      <ChatFriends />
    </div>
  )
}