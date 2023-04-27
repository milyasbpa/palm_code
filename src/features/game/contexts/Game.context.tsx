import React, { createContext, useReducer, Dispatch } from "react";
import { GameActions, InitialStateType } from "./Game.types";
import { GameDataReducer } from "./Game.reducers";

const initialState: InitialStateType = {
  game: {
    data: {
      id: -1,
      title: "",
      thumbnail: "",
      short_description: "",
      game_url: "",
      genre: "",
      platform: "",
      publisher: "",
      developer: "",
      release_date: "",
      freetogame_profile_url: "",
    },
  },
};

const GameContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<GameActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ game }: InitialStateType, action: GameActions) => ({
  game: GameDataReducer(game, action),
});

const GameProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
