import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import { Home, About } from "./pages";
import { Navbar, NavbarSidebar } from "./components/Navigation/index";

export default function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavbarSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}