import React, { createContext, useReducer, Dispatch } from "react";
import { DeveloperActions, InitialStateType } from "./Developer.types";
import { GamesDeveloperReducer } from "./Developer.reducers";

const initialState: InitialStateType = {
  games: {
    pagination: {
      offset: 0,
    },
    data: {},
  },
};

const DeveloperContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<DeveloperActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { games }: InitialStateType,
  action: DeveloperActions
) => ({
  games: GamesDeveloperReducer(games, action),
});

const DeveloperProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <DeveloperContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DeveloperContext.Provider>
  );
};

export { DeveloperProvider, DeveloperContext };
