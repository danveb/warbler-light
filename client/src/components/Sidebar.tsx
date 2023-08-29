import { Link } from "react-router-dom";
import { links } from "../constants/links";
import "../styles/Sidebar.css"; 
import { openProps } from "../types";

export default function Sidebar({ menuOpen, setMenuOpen }: openProps) {
  return (
    <nav data-testid="sidebarId" className={"sidebar__nav " + (menuOpen && "active")}>
      <div className="sidebar">
        <ul>
          {links.map((link)=> (
            <li key={link.id} onClick={()=> setMenuOpen(!menuOpen)}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
