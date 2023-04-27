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
  games: IGamesHomeData;
}

// State Collection Types consist of:
export interface IGamesHomeData {
  pagination: {
    offset: number;
  };
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
  }[];
}

// Action Collection Types
export type GamesHomeActions = GamesHomeDataActions;

// Action Collection Types consist of:
export enum GamesHomeActionEnum {
  // Data
  SetGamesData = "SetGamesData",
  AddGameData = "AddGameData",
}

// Data
type GamesHomeDataPayload = {
  [GamesHomeActionEnum.SetGamesData]: IGamesHomeData;
  [GamesHomeActionEnum.AddGameData]: {
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

export type GamesHomeDataActions =
  ActionMap<GamesHomeDataPayload>[keyof ActionMap<GamesHomeDataPayload>];
