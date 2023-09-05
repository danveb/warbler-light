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