import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  // Methods
  //myFunction: () => void;
}

export const UIContext = createContext({} as ContextProps)