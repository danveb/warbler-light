import { ChangeEvent, KeyboardEvent, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase";
import { User } from "firebase/auth";
import "../../styles/ChatSearch.css"; 

export default function ChatSearch() {
  const [username, setUsername] = useState(""); 
  const [user, setUser] = useState<User | null>(null); 

  // handleSearch
  const handleSearch = async () => {
    // initialize query in "users" table where exact displayName equals to searched username
    const q = query(collection(db, "users"), where("displayName", "==", username)); 

    try {
      const querySnapshot = await getDocs(q); 
      querySnapshot.forEach((doc) => {
        // console.log(doc.data()); // returns displayName, email, photoURL, uid
        setUser(doc.data() as User); 
      });
    } catch(error) {
      console.log(error); 
    }
  };

  // handleKey
  const handleKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.code === "Enter" || e.code === "Space") return handleSearch(); 
    // console.log(e.code); 
  };

  // handleChange 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); 
  };

  return (
    <div className="chatSearch">
      <div className="chatSearch__form">
        <input 
          type="text"
          placeholder="Find a user"
          onChange={handleChange}
          onKeyDown={handleKey}
          value={username}
        />
      </div>
      {user && user.photoURL && (
        <div className="user__chat">
          <img src={user.photoURL} alt="" />
          <div className="user__chat--info">
            <h3>{user.displayName}</h3>
          </div>
        </div>
      )}
    </div>
  )
}