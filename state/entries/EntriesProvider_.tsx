import { FC, ReactNode, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import { v4 as uuid } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const UI_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      createdAt: Date.now(),
      description: 'lorem',
      status: 'pending',

    },
    {
      _id: uuid(),
      createdAt: Date.now() - 123123,
      description: 'lorem',
      status: 'in-progress',

    },
    {
      _id: uuid(),
      createdAt: Date.now() - 1123123,
      description: 'lorem',
      status: 'finished',

    },
  ],
};

export const EntriesProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, UI_INITIAL_STATE);

  // const openSideMenu = () => dispatch({ type: "UI-Open Sidebar" });
  // const closeSideMenu = () => dispatch({ type: "UI-Close Sidebar" });

  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
