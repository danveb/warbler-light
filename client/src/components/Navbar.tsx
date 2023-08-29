import { useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../constants/links"; 
import "../styles/Navbar.css"; 
import { openProps } from "../types/index"; 

export default function Navbar({ menuOpen, setMenuOpen }: openProps) {
  // useEffect 
  // when resizing window we'll handle state back to closing mobileMenu/navbar bg
  useEffect(() => {
    const handleResize = () => {
      if(menuOpen) {
        setMenuOpen(!menuOpen); 
      }
    }; 

    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <header>
      <nav data-testid="navbarId" className={"navbar " + (menuOpen && "active")}>
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>⚛️🔥💬</Link>
          </div>
          <div data-testid="hamburger" className="hamburger__menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar__links">
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
