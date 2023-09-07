import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import { Home, About } from "./pages";
import { Navbar, NavbarSidebar } from "./components/Navigation/index";
import { AuthContextProvider } from "./context/AuthContext";
import { Login, Register } from "./components/Entry";

export default function App() { 
  // useState
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  // const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  //   const { user } = UserAuth(); 
  //   // check: if not a user we redirect to login
  //   if(user === null) {
  //     return <Navigate to="/login" />
  //   }
  //   // else we can proceed to Home page
  //   return children; 
  // }; 

  return (
    <AuthContextProvider>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavbarSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        {/* <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  )
}