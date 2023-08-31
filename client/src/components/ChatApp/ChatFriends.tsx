import { UserProps } from "../../types";
import "../../styles/ChatFriends.css"; 

export default function ChatFriends(user: UserProps) {
  return (
    <div className="chatFriends">
      <div className="chatFriends__user">
        <img src={user?.photoURL} alt="" />
        <div className="chatFriends__user--info">
          <p>{user?.displayName}</p>
          <p>Hello world</p>
        </div>
      </div>
      <div className="chatFriends__user">
        <img src={user?.photoURL} alt="" />
        <div className="chatFriends__user--info">
          <p>{user?.displayName}</p>
          <p>Hello world</p>
        </div>
      </div>
      <div className="chatFriends__user">
        <img src={user?.photoURL} alt="" />
        <div className="chatFriends__user--info">
          <p>{user?.displayName}</p>
          <p>Hello world</p>
        </div>
      </div>
    </div>
  )
}