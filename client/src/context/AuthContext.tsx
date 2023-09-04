import { GoogleAuthProvider, User, UserCredential, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useState, useEffect, ReactNode } from "react";

export interface AuthContextProps {
  googleSignIn: () => Promise<UserCredential>; 
  logOut: () => Promise<void>; 
  user: User | null;
}

export interface AuthContextProviderProps {
  children: ReactNode; 
}

const AuthContext = createContext({} as AuthContextProps); 

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // useState 
  const [user, setUser] = useState<User | null>(null); 

  // useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    }); 
    return () => {
      unsubscribe(); 
    }
  }, []);

  // googleSignIn 
  // use a simple return; add logic elsewhere 
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider(); 
    return signInWithPopup(auth, provider); 
  }; 

  // logOut 
  // use a simple return; add logic elsewhere 
  const logOut = () => {
    return signOut(auth); 
  }; 

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      { children }
    </AuthContext.Provider>
  )
};