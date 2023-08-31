import addImg from "../../assets/add-img.png"; 
import addFile from "../../assets/add-file.png"; 
import "../../styles/MessageInput.css"; 

export default function MessageInput() {
  return (
    <div className="messageInput">
      <input 
        type="text"
        placeholder="Say something nice..."
      />
      <div className="messageInput__send">
        <img src={addFile} alt="add-file icon" />
        <input 
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <img src={addImg} alt="add-img icon" />
        </label>
        <button className="messageInput__btn">warble</button>
      </div>
    </div>
  )
}