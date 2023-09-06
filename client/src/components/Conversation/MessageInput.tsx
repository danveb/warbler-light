import addImg from "../../assets/add-img.png"; 
import "../../styles/MessageInput.css"; 

export default function MessageInput() {
  return (
    <div className="messageInput">
      <input 
        type="text"
        placeholder="Say something nice..."
      />
      <div className="messageInput__send">
        <label htmlFor="file">
          <img src={addImg} alt="add-file icon" />
        </label>
        <input 
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <button className="messageInput--btn">warble</button>
      </div>
    </div>
  )
}