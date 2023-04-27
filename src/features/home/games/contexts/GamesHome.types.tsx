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
  top_rating: ITopRatingHomeData;
  games: IGamesHomeData;
}

// State Collection Types consist of:

export interface ITopRatingHomeData {
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

export interface IGamesHomeData {
  category: {
    id: number;
    name: string;
  };
  sort_by: {
    id: number;
    name: string;
  };
  platform: {
    id: number;
    name: string;
  };
  search: string;
  pagination: {
    offset: number;
  };

  raw: {
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
export type GamesHomeActions = GamesHomeDataActions | TopRatingHomeDataActions;

// Action Collection Types consist of:
export enum GamesHomeActionEnum {
  // top rating
  SetTopRatingData = "SetTopRatingData",
  // Data
  SetGamesData = "SetGamesData",
  AddGameData = "AddGameData",
  SetRawData = "SetRawData",
  SearchGame = "SearchGame",
  FilterByCategory = "FilterByCategory",
  FilterByPlatform = "FilterByPlatform",
  SortBy = "SortBy",
}

// Top Rating
type TopRatingHomeDataPayload = {
  [GamesHomeActionEnum.SetTopRatingData]: ITopRatingHomeData;
};

export type TopRatingHomeDataActions =
  ActionMap<TopRatingHomeDataPayload>[keyof ActionMap<TopRatingHomeDataPayload>];

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
  [GamesHomeActionEnum.SetRawData]: {
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
  [GamesHomeActionEnum.SearchGame]: string;
  [GamesHomeActionEnum.FilterByCategory]: { id: number; name: string };
  [GamesHomeActionEnum.FilterByPlatform]: { id: number; name: string };
  [GamesHomeActionEnum.SortBy]: { id: number; name: string };
};

export type GamesHomeDataActions =
  ActionMap<GamesHomeDataPayload>[keyof ActionMap<GamesHomeDataPayload>];
