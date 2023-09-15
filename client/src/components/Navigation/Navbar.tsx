import { useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../../constants/links"; 
import { NavbarProps } from "../../types/index"; 
import "../../styles/Navbar.css"; 

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  // useEffect 
  // when resizing window we'll handle state back to closing navbarSidebar/navbar bg
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
    <header data-testid="navbarId" className={"navbar " + (menuOpen && "active")}>
      <div className="navbar__wrapper">
        <div className="navbar__top">
          <Link to="/" onClick={() => setMenuOpen(false)}>⚛️🔥💬 WARBLER</Link>
        </div>
        <div className="navbar__bottom">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div data-testid="hamburger" className="hamburger__menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}
