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
  games: IGenreData;
}

// State Collection Types consist of:
export interface IGenreData {
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
export type GenreActions = GenreDataActions;

// Action Collection Types consist of:
export enum GenreActionEnum {
  // Data
  SetGamesData = "SetGamesData",
  AddGameData = "AddGameData",
}

// Data
type GenreDataPayload = {
  [GenreActionEnum.SetGamesData]: IGenreData;
  [GenreActionEnum.AddGameData]: {
    // [key: string]: {[key:string]:any};
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

export type GenreDataActions =
  ActionMap<GenreDataPayload>[keyof ActionMap<GenreDataPayload>];
