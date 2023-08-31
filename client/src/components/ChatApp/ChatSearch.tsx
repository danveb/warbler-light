import { UserProps } from "../../types"; 
import "../../styles/ChatSearch.css"; 

export default function ChatSearch(user: UserProps) {
  return (
    <div className="chatSearch">
      <div className="chatSearch__form">
        <input 
          type="text"
          placeholder="Find a user"
        />
      </div>
      <div className="user__chat">
        <img src={user?.photoURL} alt="" />
        <div className="user__chat--info">
          <p>{user?.displayName}</p>
        </div>
      </div>
    </div>
  )
}