import { ChangeEvent, KeyboardEvent, useState } from "react";
import { collection, query, where, getDocs, setDoc, getDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../../firebase";
import { User } from "firebase/auth";
import "../../styles/ChatSearch.css"; 
import { UserAuth } from "../../context/AuthContext";

export default function ChatSearch() {
  const [username, setUsername] = useState(""); 
  const [currentUser, setCurrentUser] = useState<User | null>(null); 
  const [error, setError] = useState<boolean>(false); 

  // UserAuth
  const { user } = UserAuth(); 

  // handleSearch
  const handleSearch = async () => {
    // initialize query in "users" table where exact displayName equals to searched username
    const q = query(collection(db, "users"), where("displayName", "==", username)); 

    try {
      const querySnapshot = await getDocs(q); 
      console.log(querySnapshot); 
      querySnapshot.forEach((doc) => {
        // console.log(doc.data()); // returns displayName, email, photoURL, uid
        setCurrentUser(doc.data() as User); 
      });
    } catch(error) {
      console.log(error); 
      setError(true); 
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

  // handleSelect 
  const handleSelect = async (): Promise<void> => {
    if(user && currentUser) {
      // check whether chats collection exists 
      const combinedId = user.uid > currentUser.uid ? user.uid + currentUser.uid : currentUser.uid + user.uid; 
      try {
        const response = await getDoc(doc(db, "chats", combinedId)); 
        if(!response.exists()) {
          // create a chat in chats collection
          await setDoc(doc(db, "chats", combinedId), { messages: [] }); 
          
          // create user chats 
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId+".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName, 
              photoURL: currentUser.photoURL, 
            },
            [combinedId+".date"]: serverTimestamp()
          });

          // create user chats 
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId+".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName, 
              photoURL: user.photoURL, 
            },
            [combinedId+".date"]: serverTimestamp()
          })
        }
      } catch(error) {
        console.log(error); 
      }
    }
    setCurrentUser(null); 
    setUsername(""); 
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
      {error && <span>User not found...</span>}
      {currentUser && currentUser.photoURL && (
        <div className="user__chat" onClick={handleSelect}>
          <img src={currentUser.photoURL} alt="" />
          <div className="user__chat--info">
            <h3>{currentUser.displayName}</h3>
          </div>
        </div>
      )}
    </div>
  )
}