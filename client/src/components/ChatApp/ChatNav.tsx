import "../../styles/ChatNav.css"; 
import { UserProps } from "../../types";

export default function ChatNav(user: UserProps) {
  return (
    <div className="chatNav">
      <span className="chatNav__logo">🔥</span>
      <div className="chatNav__user">
        <img src={user.photoURL} />
        <p>{user.displayName}</p>
        <button>Logout</button>
      </div>
    </div>
  )
}