import { IGamesGenres, GenresActionEnum, GenresActions } from "./Genres.types";

export const GamesGenresReducer = (
  state: IGamesGenres,
  action: GenresActions
) => {
  switch (action.type) {
    case GenresActionEnum.SetGamesData: {
      return action.payload;
    }
    case GenresActionEnum.AddGameData: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          offset: state.pagination.offset + 4,
        },
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
