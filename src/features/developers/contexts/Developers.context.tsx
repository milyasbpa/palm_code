import React, { createContext, useReducer, Dispatch } from "react";
import { DevelopersActions, InitialStateType } from "./Developers.types";
import { GamesDevelopersReducer } from "./Developers.reducers";

const initialState: InitialStateType = {
  games: {
    pagination: {
      offset: 0,
    },
    data: {},
  },
};

const DevelopersContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<DevelopersActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { games }: InitialStateType,
  action: DevelopersActions
) => ({
  games: GamesDevelopersReducer(games, action),
});

const DevelopersProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <DevelopersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DevelopersContext.Provider>
  );
};

export { DevelopersProvider, DevelopersContext };
