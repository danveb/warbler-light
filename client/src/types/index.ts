import React from "react";

export interface openProps {
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
  children: React.ReactNode; 
}

// export interface ChatData {
//   [key: string]: {
//     userInfo: {
//       uid: string; 
//       displayName: string; 
//       photoURL: string; 
//     }; 
//     date: {
//       seconds: number; 
//     };
//     lastMessage: {
//       text: string; 
//       timestamp: {
//         seconds: number; 
//       }; 
//     }
//   }
// }

export interface ChatData {
  [key: string]: {
    userInfo: {
      uid: string;
      displayName: string;
      photoURL: string;
    };
    date: {
      seconds: number;
    };
    lastMessage?: {
      text: string;
      timestamp: {
        seconds: number;
      };
    };
  };
}
