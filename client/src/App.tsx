import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import { Home, About, Login, Register } from "./pages";
import { Navbar, NavbarSidebar } from "./components/Navigation/index";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

export default function App() { 
  // useState
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavbarSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ChatContextProvider>
    </AuthContextProvider>
  )
}