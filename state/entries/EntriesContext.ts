import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  // Methods
}

export const EntriesContext = createContext({} as ContextProps);
