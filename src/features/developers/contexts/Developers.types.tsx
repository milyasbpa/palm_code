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
  games: IGamesDevelopers;
}

// State Collection Types consist of:
export interface IGamesDevelopers {
  pagination: {
    offset: number;
  };
  raw: {
    [key: string]: {
      id: number;
      title: string;
      thumbnail: string;
      short_description: string;
      game_url: string;
      Developers: string;
      platform: string;
      publisher: string;
      developer: string;
      release_date: string;
      freetogame_profile_url: string;
    }[];
  };
  data: {
    [key: string]: {
      id: number;
      title: string;
      thumbnail: string;
      short_description: string;
      game_url: string;
      Developers: string;
      platform: string;
      publisher: string;
      developer: string;
      release_date: string;
      freetogame_profile_url: string;
    }[];
  };
}

// Action Collection Types
export type DevelopersActions = GamesDevelopersActions;

// Action Collection Types consist of:
export enum DevelopersActionEnum {
  // Data
  SetGamesData = "SetGamesData",
  AddGameData = "AddGameData",
  SetRawData = "SetRawData",
}

// Data
type GamesDevelopersPayload = {
  [DevelopersActionEnum.SetGamesData]: IGamesDevelopers;
  [DevelopersActionEnum.AddGameData]: {
    // [key: string]: {[key:string]:any};
    [key: string]: {
      id: number;
      title: string;
      thumbnail: string;
      short_description: string;
      game_url: string;
      Developers: string;
      platform: string;
      publisher: string;
      developer: string;
      release_date: string;
      freetogame_profile_url: string;
    }[];
  };
  [DevelopersActionEnum.SetRawData]: {
    // [key: string]: {[key:string]:any};
    [key: string]: {
      id: number;
      title: string;
      thumbnail: string;
      short_description: string;
      game_url: string;
      Developers: string;
      platform: string;
      publisher: string;
      developer: string;
      release_date: string;
      freetogame_profile_url: string;
    }[];
  };
};

export type GamesDevelopersActions =
  ActionMap<GamesDevelopersPayload>[keyof ActionMap<GamesDevelopersPayload>];
