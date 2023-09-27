import { useState } from "react"; 
import "../styles/Login.css"; 
import { LoginProps } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Login() {
  // UserAuth 
  const { loginWithEmailAndPassword } = UserAuth();
  
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
        <form className="login__form" onSubmit={handleSubmit} data-testid="form">
          <h2>warbler</h2>
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
          {/* currently there's a bug affecting GoogleSignIn where chats are not correctly loaded... */}
        </form>
      </div>
    </div>
  )
}