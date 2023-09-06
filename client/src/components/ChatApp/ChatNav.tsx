import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import bubble from "../../assets/bubble.png"; 
import "../../styles/ChatNav.css"; 

export default function ChatNav() {
  // UserAuth 
  const { user, logOut } = UserAuth(); 

  // useNavigate
  const navigate = useNavigate(); 

  // handleLogOut
  const handleLogOut = async () => {
    try {
      await logOut(); 
      navigate("/login"); 
    } catch(error) {
      console.log(error); 
    }
  }

  // handleLogIn 
  const handleLogIn = () => {
    navigate("/login"); 
  }

  return (
    <div className="chatNav">
      <div className="chatNav__user">
        {user && user.photoURL ? (
          <>
            <img src={user.photoURL} alt="profile picture" />
            <p>{user?.displayName}</p>
            <button className="chatNav__logout--btn" onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          <>
            <img src={bubble} alt="profile picture" />
            <p>1234567890</p>
            <button className="chatNav__logout--btn" onClick={handleLogIn}>Login</button>
          </>
        )}
      </div>
    </div>
  )
}