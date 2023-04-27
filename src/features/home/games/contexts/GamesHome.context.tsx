import React, { createContext, useReducer, Dispatch } from "react";
import { GamesHomeActions, InitialStateType } from "./GamesHome.types";
import { GamesHomeDataReducer } from "./GamesHome.reducers";

const initialState: InitialStateType = {
  games: {
    category: undefined,
    sort_by: undefined,
    platform: undefined,
    pagination: {
      offset: 0,
    },
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
