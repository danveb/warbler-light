import { createContext, useReducer, ReactNode, useContext } from "react";
import { UserAuth } from "./AuthContext";
import { User } from "firebase/auth";

// export interface User {
//   uid: string; 
//   displayName: string; 
//   photoURL: string; 
// }

export interface Chat {
  date: number; 
  lastMessage: {
    text: string; 
    timestamp: number; 
  }; 
  userInfo: User; 
}

export interface ChatState {
  chatId: string; 
  currentUser: User | null; 
}

export interface ChatAction {
  type: string; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any; 
}

export interface ChatContextProps {
  data: ChatState; 
  dispatch: React.Dispatch<ChatAction>; 
}

export interface ChatContextProviderProps {
  children: ReactNode; 
}

const ChatContext = createContext<ChatContextProps>(null!); 

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  // UserAuth 
  const { user } = UserAuth(); 

  // INITIAL_STATE coming from ChatState 
  const INITIAL_STATE: ChatState = {
    chatId: "null", 
    currentUser: {
      uid: "", 
      displayName: "", 
      photoURL: "", 
    }, 
  }

  // reducer
  const chatReducer = (state: ChatState, action: ChatAction) => {
    switch (action.type) {
      // when "CHANGE_USER" 
      case "CHANGE_USER":
        // eslint-disable-next-line no-case-declarations
        const currentUser = action.payload; 
        // eslint-disable-next-line no-case-declarations
        const chatId = 
          user!.uid > currentUser.uid 
          ? user!.uid + currentUser.uid 
          : currentUser.uid + user!.uid
        return {
          currentUser, 
          chatId, 
        }
      // default we'll return state 
      default: 
        return state; 
    }
  }

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE); 

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      { children }
    </ChatContext.Provider>
  )
};

export const ChatContextP = () => {
  return useContext(ChatContext); 
}