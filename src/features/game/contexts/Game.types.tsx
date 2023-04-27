type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// State Collection Types
export interface InitialStateType {
  game: IGameData;
}

// State Collection Types consist of:
export interface IGameData {
  data: {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
  };
}

// Action Collection Types
export type GameActions = GameDataActions;

// Action Collection Types consist of:
export enum GameActionEnum {
  // Data
  SetGameData = "SetGameData",
}

// Data
type GameDataPayload = {
  [GameActionEnum.SetGameData]: IGameData;
};

export type GameDataActions =
  ActionMap<GameDataPayload>[keyof ActionMap<GameDataPayload>];
