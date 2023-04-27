import React, { createContext, useReducer, Dispatch } from "react";
import { GenreActions, InitialStateType } from "./Genre.types";
import { GenreDataReducer } from "./Genre.reducers";

const initialState: InitialStateType = {
  games: {
    pagination: {
      offset: 0,
    },
    data: {},
  },
};

const GenreContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<GenreActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ games }: InitialStateType, action: GenreActions) => ({
  games: GenreDataReducer(games, action),
});

const GenreProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GenreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GenreContext.Provider>
  );
};

export { GenreProvider, GenreContext };
