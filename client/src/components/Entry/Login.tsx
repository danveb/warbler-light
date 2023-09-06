import { useState } from "react"; 
import "../../styles/Login.css"; 
import { LoginProps } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

export default function Login() {
  // UserAuth 
  const { googleSignIn, loginWithEmailAndPassword } = UserAuth();
  
  // useNavigate
  const navigate = useNavigate(); 

  // useState
  const [formData, setFormData] = useState<LoginProps>({
    email: "", 
    password: "", 
  }); 

  // destructure all elements from formData 
  const { email, password } = formData; 

  // handleChange 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev, 
      [e.target.name]: e.target.value, 
    })); 
  };

  // handleGoogleSignIn
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn(); 
      navigate("/"); 
    } catch(error) {
      console.log(error); 
    }
  }

  // handleLoginWithEmailAndPassword 
  const handleLoginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await loginWithEmailAndPassword(email, password); 
    } catch(error) {
      console.log(error); 
    }
  }; 

  // handleSubmit 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    // call handleLoginWithEmailAndPassword  
    await handleLoginWithEmailAndPassword(email, password); 
    navigate("/"); 
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <form className="login__form" onSubmit={handleSubmit}>
          <h2>warbler-lite</h2>
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
          <button>Login</button>
          <p>new to warbler?<Link to="/register">Register</Link></p>
          <div className="googleBtn">
            <GoogleButton 
              // type="light" // by default it's dark
              // label="" // custom message if needed
              // handle googleSignIn
              onClick={handleGoogleSignIn}
            />
          </div>
        </form>
      </div>
    </div>
  )
}