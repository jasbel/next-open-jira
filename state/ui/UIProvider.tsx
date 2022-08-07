import { createContext, FC, ReactNode, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./UIReducer";

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: "UI-Open Sidebar" });
  const closeSideMenu = () => dispatch({ type: "UI-Close Sidebar" });

  return <UIContext.Provider value={{ ...state, closeSideMenu, openSideMenu }}>{children}</UIContext.Provider>;
};
