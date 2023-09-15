import "../styles/About.css"; 

export default function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <main className="about__main">
          <div className="about__title">
            <h1>Welcome</h1>
          </div>
          <div className="about__intro">
            <p>warbler is a lightweight chat application intended to recreate a fun experience  chat application intended to be a fun experience chatting with friends. </p>
          </div>
          <div className="about__title">
            <h1>Enjoy</h1>
          </div>
          <div className="about__intro">
            <p>My mission is to design and develop web applications that provide a rich user interface. I focus on creating an aesthetically clean, functional, scalable, and testable apps. </p>
          </div>
          {/* <div>
            <button>explore chat</button>
          </div> */}
        </main>
      </div>
    </div>
  )
}