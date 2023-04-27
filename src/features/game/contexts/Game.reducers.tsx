import { IGameData, GameActionEnum, GameActions } from "./Game.types";

export const GameDataReducer = (state: IGameData, action: GameActions) => {
  switch (action.type) {
    case GameActionEnum.SetGameData: {
      return action.payload;
    }

    default:
      return state;
  }
};
