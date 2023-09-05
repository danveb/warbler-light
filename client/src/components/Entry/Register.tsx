import { useState } from "react"; 
import "../../styles/Register.css"; 
import { RegisterProps } from "../../types";
import { Link } from "react-router-dom";

export default function Register() {
  // useState
  const [formData, setFormData] = useState<RegisterProps>({
    displayName: "", 
    email: "", 
    password: "", 
    avatar: "", 
  }); 

  // destructure all elements from formData 
  const { displayName, email, password, avatar } = formData; 

  // handleChange 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev, 
      [e.target.name]: e.target.value, 
    })); 
  };

  // handleAvatarUrl
  const handleAvatarUrl = (filePath: string) => {
    const splitPath = filePath.split("\\"); 
    const fileName = splitPath[splitPath.length - 1]; 
    return fileName; // add-img.png
  };

  // handleSubmit 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(handleAvatarUrl(avatar)); 
  };

  return (
    <div className="register">
      <div className="register__wrapper">
        <form className="register__form" onSubmit={handleSubmit}>
          <h2>warbler-lite</h2>
          <label htmlFor="displayName">Display Name</label>
          <input 
            type="text"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={handleChange} 
            placeholder="John Doe"
          />
          <label htmlFor="email">Email</label>
          <input 
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange} 
            placeholder="jdoe@test.com"
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange} 
            placeholder="**********"
            autoComplete="on"
          />
          <label htmlFor="avatar">Avatar</label>
          <input 
            className="avatar__input"
            // style={{ display: "none" }}
            type="file"
            id="file"
            name="avatar"
            value={avatar}
            onChange={handleChange}
          />
          <button>Register</button>
          <p>already have an account?<Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}