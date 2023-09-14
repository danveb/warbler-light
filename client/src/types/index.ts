import { Timestamp } from "firebase/firestore";
import { ReactNode } from "react";

export interface NavbarProps {
  menuOpen: boolean; 
  setMenuOpen: (menuOpen: boolean) => void; 
}

export interface UserProps {
  displayName?: string; 
  photoURL?: string; 
}

export interface RegisterProps {
  displayName: string; 
  email: string; 
  password: string; 
  avatar: string; 
}

export interface LoginProps {
  email: string; 
  password: string; 
}

export interface ProtectedRouteProps {
  children: ReactNode; 
}

export interface ChatData {
  [key: string]: {
    userInfo: {
      uid: string;
      displayName: string;
      photoURL: string;
    };
    date: {
      seconds: number;
      nanoseconds: number; 
    };
    lastMessage?: {
      text: string;
      timestamp: {
        seconds: number;
      };
    };
  };
}

export interface MessageProps {
  message: {
    date: Timestamp; 
    id: string; 
    senderId: string; 
    text: string; 
    img: string; 
  }
}