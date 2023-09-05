import { useState } from "react"; 
import "../../styles/Login.css"; 
import { LoginProps } from "../../types";
import { Link } from "react-router-dom";

export default function Login() {
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

  // handleSubmit 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
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
        </form>
      </div>
    </div>
  )
}