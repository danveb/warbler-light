import "../../styles/ConversationPanel.css"; 
import { Messages, MessageInput } from "./index";
import { ChatContextP } from "../../context/ChatContext";

export default function ConversationPanel() {
  // ChatContextP 
  const { data } = ChatContextP(); 
  
  return (
    <div className="conversationPanel">
      <div className="conversationPanel__info">
        {data.chatId !== "null" ? (
          <p>Conversation with: {data.currentUser?.displayName}</p>
        ) : (
          <p>Start a conversation 👋</p>
        )}
      </div>
      <Messages />
      <MessageInput />
    </div>
  )
}