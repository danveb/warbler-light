import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { GoogleAuthProvider, User, UserCredential, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export interface AuthContextProps {
  googleSignIn: () => Promise<UserCredential>; 
  logOut: () => Promise<void>; 
  loginWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>; 
  signUpWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>; 
  user: User | null; 
  // setUser: React.Dispatch<SetStateAction<User | null>>; // no longer needed since fixed bug
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

  // loginWithEmailAndPassword 
  const loginWithEmailAndPassword = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password); 
  };

  // signUpWithEmailAndPassword 
  const signUpWithEmailAndPassword = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password); 
  }; 

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, loginWithEmailAndPassword, signUpWithEmailAndPassword }}>
      { children }
    </AuthContext.Provider>
  )
};

export const UserAuth = () => {
  return useContext(AuthContext); 
}