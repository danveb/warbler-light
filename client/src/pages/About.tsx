import { Link } from "react-router-dom";
import "../styles/About.css"; 

export default function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <main className="about__main">
          <h1 className="about__title">👋 💬</h1>
          <p className="about__content">warbler is a lightweight chat application intended to bring conversations that matter right into your fingertips. No more complex options to fiddle around. Just a simple chat app to send and receive messages on real-time.</p>
        <div>
          <button className="about__btn">
            <Link to="/">explore chat</Link>
          </button>
        </div>
        </main>
      </div>
    </div>
  )
}