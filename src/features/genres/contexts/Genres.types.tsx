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
  games: IGamesGenres;
}

// State Collection Types consist of:
export interface IGamesGenres {
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
      genre: string;
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
export type GenresActions = GenresDataActions;

// Action Collection Types consist of:
export enum GenresActionEnum {
  // Data
  SetGamesData = "SetGamesData",
  AddGameData = "AddGameData",
  SetRawData = "SetRawData",
}

// Data
type GenresDataPayload = {
  [GenresActionEnum.SetGamesData]: IGamesGenres;
  [GenresActionEnum.AddGameData]: {
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

  [GenresActionEnum.SetRawData]: {
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

export type GenresDataActions =
  ActionMap<GenresDataPayload>[keyof ActionMap<GenresDataPayload>];
