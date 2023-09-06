import { UserAuth } from "../../context/AuthContext";
import "../../styles/ChatFriends.css"; 


export default function ChatFriends() {
  // UserAuth 
  const { user } = UserAuth(); 

  return (
    <div className="chatFriends">
      {user && user.photoURL && (
        <div className="chatFriends__user">
          <img src={user?.photoURL} alt="" />
          <div className="chatFriends__user--info">
            <h3>{user?.displayName}</h3>
            <p>Hello world</p>
          </div>
        </div>
      )}
    </div>
  )
}