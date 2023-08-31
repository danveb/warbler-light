import { ChatFriends, ChatNav, ChatSearch } from "./index"; 
import "../../styles/ChatPanel.css"; 
import { UserProps } from "../../types";

export default function ChatPanel(user: UserProps) {
  return (
    <div className="chatPanel">
      <ChatNav {...user} />
      <ChatSearch {...user} />
      <ChatFriends {...user} />
    </div>
  )
}