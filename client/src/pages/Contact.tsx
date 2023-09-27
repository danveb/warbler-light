import github from "../assets/github.svg"; 
import "../styles/Contact.css"; 

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <main className="contact__main">
          <p>© All rights reserved – Danny Bae</p>
          <a href="https://www.github.com/danveb" target="_blank" rel="noreferrer noopener" data-testid="github__link">
            <img src={github} alt="github logo" />
          </a>
        </main>
      </div>
    </div>
  )
}