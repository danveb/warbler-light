import "../../styles/ConversationPanel.css"; 
import addFile from "../../assets/add-file.png"; 
import addMore from "../../assets/add-more.png"; 
import { Messages, MessageInput } from "./index";
import { ChatContextP } from "../../context/ChatContext";

export default function ConversationPanel() {
  // ChatContextP 
  const { data } = ChatContextP(); 

  return (
    <div className="conversationPanel">
      <div className="conversationPanel__info">
        <p>{data.currentUser?.displayName}</p>
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