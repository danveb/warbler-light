import { Message } from "./index"; 
import "../../styles/Messages.css"; 

export default function Messages() {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
    </div>
  )
}