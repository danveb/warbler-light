import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { ChatContextP } from "../../context/ChatContext";
import addImg from "../../assets/add-img.png"; 
import "../../styles/MessageInput.css"; 
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid"; 
import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function MessageInput() {
  // UserAuth
  const { user } = UserAuth(); 
  // ChatContextP
  const { data } = ChatContextP(); 

  // useState
  const [text, setText] = useState(""); 
  const [img, setImg] = useState<File | null>(null); 

  // handleSend 
  const handleSend = async () => {
    if(img) {
      const storageRef = ref(storage, uuid()); 
      const uploadTask = uploadBytesResumable(storageRef, img); 
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(), 
              text, 
              senderId: user?.uid, 
              date: Timestamp.now(), 
              img: downloadURL, 
            })
          })
        })
      })
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(), 
          text,
          senderId: user?.uid, 
          date: Timestamp.now(), 
        })
      })
    }

    // updateDoc for userChats on user
    await updateDoc(doc(db, "userChats", user!.uid), {
      [data.chatId + ".lastMessage"]:{
        text, 
      }, 
      [data.chatId + ".date"]: serverTimestamp()
    });

    // updateDoc for userChats on currentUser
    await updateDoc(doc(db, "userChats", data.currentUser!.uid), {
      [data.chatId + ".lastMessage"]:{
        text, 
      }, 
      [data.chatId + ".date"]: serverTimestamp()
    });

    setText(""); 
    setImg(null); 
  }

  return (
    <div className="messageInput">
      <input 
        type="text"
        placeholder="Say something nice..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="messageInput__send">
        <label htmlFor="file">
          <img src={addImg} alt="add-file icon" />
        </label>
        <input 
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files?.[0] ?? null)}
        />
        <button className="messageInput--btn" onClick={handleSend}>warble</button>
      </div>
    </div>
  )
}