import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import { Home, About } from "./pages";
import { Navbar, NavbarSidebar } from "./components/Navigation/index";
import { AuthContextProvider } from "./context/AuthContext";
import { Login, Register } from "./components/Entry";

export default function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <AuthContextProvider>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavbarSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  )
}