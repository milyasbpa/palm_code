import React, { createContext, useReducer, Dispatch } from "react";
import { GenresActions, InitialStateType } from "./Genres.types";
import { GamesGenresReducer } from "./Genres.reducers";

const initialState: InitialStateType = {
  games: {
    pagination: {
      offset: 0,
    },
    data: {},
  },
};

const GenresContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<GenresActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ games }: InitialStateType, action: GenresActions) => ({
  games: GamesGenresReducer(games, action),
});

const GenresProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GenresContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GenresContext.Provider>
  );
};

export { GenresProvider, GenresContext };
