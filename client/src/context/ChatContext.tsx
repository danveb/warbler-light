import { createContext, useReducer, ReactNode, useContext } from "react";
import { UserAuth } from "./AuthContext";
import { User } from "firebase/auth";

export interface ChatState {
  chatId: string; 
  currentUser: User | null; 
}

export interface ChatAction {
  type: string; 
  payload: User; 
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
    currentUser: {} as User, 
  }

  // reducer
  const chatReducer = (state: ChatState, action: ChatAction) => {
    switch (action.type) {
      // when "CHANGE_USER" 
      case "CHANGE_USER":
        return {
          currentUser: action.payload,
          chatId:
            user!.uid > action.payload.uid ? user!.uid + action.payload.uid : action.payload.uid + user?.uid, 
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