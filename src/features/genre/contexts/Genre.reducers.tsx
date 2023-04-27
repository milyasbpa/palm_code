import { IGenreData, GenreActionEnum, GenreActions } from "./Genre.types";

export const GenreDataReducer = (state: IGenreData, action: GenreActions) => {
  switch (action.type) {
    case GenreActionEnum.SetGamesData: {
      return action.payload;
    }
    case GenreActionEnum.AddGameData: {
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
