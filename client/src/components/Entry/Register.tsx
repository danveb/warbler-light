import { useState } from "react"; 
import "../../styles/Register.css"; 
import { RegisterProps } from "../../types";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";

export default function Register() {
  // UserAuth 
  const { signUpWithEmailAndPassword, setUser } = UserAuth(); 

  // useState
  const [formData, setFormData] = useState<RegisterProps>({
    displayName: "", 
    email: "", 
    password: "", 
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Twemoji_1f351.svg/1200px-Twemoji_1f351.svg.png", 
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

  // handleSignUpWithEmailAndPassword
  const handleSignUpWithEmailAndPassword = async (email: string, password: string, displayName: string, avatar: string) => {
    try {
      const userCredential = await signUpWithEmailAndPassword(email, password); 
      const updatedUser = await updateProfile(userCredential.user, {
        displayName: displayName, 
        photoURL: avatar, 
      }); 
      setUser(updatedUser); // throw TS error... trying to bug fix
      // console.log(updatedUser); 
    } catch(error) {
      console.log(error); 
    }
  };

  // handleSubmit 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(avatar); 
    await handleSignUpWithEmailAndPassword(email, password, displayName, avatar); 
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
          <input 
            className="avatar__input"
            style={{ display: "none" }}
            type="file"
            id="file"
            name="avatar"
            onChange={handleChange}
          />
          <button>Register</button>
          <p>already have an account?<Link to="/login">Login</Link></p>
          <div className="googleBtn">
            <GoogleButton 
              // type="light" // by default it's dark
              // label="" // custom message if needed
            />
          </div>
        </form>
      </div>
    </div>
  )
}