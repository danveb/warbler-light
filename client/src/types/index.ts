export interface openProps {
  menuOpen: boolean; 
  setMenuOpen: (menuOpen: boolean) => void; 
}

export interface UserProps {
  displayName?: string; 
  photoURL?: string; 
}