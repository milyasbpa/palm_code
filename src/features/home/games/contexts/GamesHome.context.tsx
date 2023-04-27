import React, { createContext, useReducer, Dispatch } from "react";
import { GamesHomeActions, InitialStateType } from "./GamesHome.types";
import { GamesHomeDataReducer } from "./GamesHome.reducers";

const initialState: InitialStateType = {
  games: {
    category: {
      id: 0,
      name: "All Categories",
    },
    sort_by: {
      id: 0,
      name: "release-date",
    },
    platform: {
      id: 0,
      name: "all",
    },
    search: "",
    pagination: {
      offset: 0,
    },
    raw: [],
    data: [],
  },
};

const GamesHomeContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<GamesHomeActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { games }: InitialStateType,
  action: GamesHomeActions
) => ({
  games: GamesHomeDataReducer(games, action),
});

const GamesHomeProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GamesHomeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GamesHomeContext.Provider>
  );
};

export { GamesHomeProvider, GamesHomeContext };
