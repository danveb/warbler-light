import "../../styles/ConversationPanel.css"; 
import add from "../../assets/add.png"; 
import more from "../../assets/more.png"; 
import { Messages, MessageInput } from "./index";

export default function ConversationPanel() {
  return (
    <div className="conversationPanel">
      <div className="conversationPanel__info">
        <span>My Friend</span>
        <div className="conversationPanel__icons">
          <img src={add} alt="add icon" />
          <img src={more} alt="more icon" />
        </div>
      </div>
      <Messages />
      <MessageInput />
    </div>
  )
}