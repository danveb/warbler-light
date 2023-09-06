import "../../styles/ConversationPanel.css"; 
import addFile from "../../assets/add-file.png"; 
import addMore from "../../assets/add-more.png"; 
import { Messages, MessageInput } from "./index";

export default function ConversationPanel() {
  return (
    <div className="conversationPanel">
      <div className="conversationPanel__info">
        <p>My Friend</p>
        <div className="conversationPanel__icons">
          <img src={addFile} alt="add icon" />
          <img src={addMore} alt="add icon" />
        </div>
      </div>
      <Messages />
      <MessageInput />
    </div>
  )
}