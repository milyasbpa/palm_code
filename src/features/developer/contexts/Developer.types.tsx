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
  games: IGamesDeveloper;
}

// State Collection Types consist of:
export interface IGamesDeveloper {
  pagination: {
    offset: number;
  };
  data: {
    [key: string]: {
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
    }[];
  };
}

// Action Collection Types
export type DeveloperActions = GamesDeveloperActions;

// Action Collection Types consist of:
export enum DeveloperActionEnum {
  // Data
  SetGamesData = "SetGamesData",
  AddGameData = "AddGameData",
}

// Data
type GamesDeveloperPayload = {
  [DeveloperActionEnum.SetGamesData]: IGamesDeveloper;
  [DeveloperActionEnum.AddGameData]: {
    [key: string]: {
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
    }[];
  };
};

export type GamesDeveloperActions =
  ActionMap<GamesDeveloperPayload>[keyof ActionMap<GamesDeveloperPayload>];
