import {
  IGamesHomeData,
  GamesHomeActionEnum,
  GamesHomeActions,
  ITopRatingHomeData,
} from "./GamesHome.types";

export const TopRatingHomeDataReducer = (
  state: ITopRatingHomeData,
  action: GamesHomeActions
) => {
  switch (action.type) {
    case GamesHomeActionEnum.SetTopRatingData: {
      return action.payload;
    }

    default:
      return state;
  }
};

export const GamesHomeDataReducer = (
  state: IGamesHomeData,
  action: GamesHomeActions
) => {
  switch (action.type) {
    case GamesHomeActionEnum.SetGamesData: {
      return action.payload;
    }
    case GamesHomeActionEnum.AddGameData: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          offset: state.pagination.offset + 10,
        },
        data: [...state.data, ...action.payload],
      };
    }
    case GamesHomeActionEnum.SetRawData: {
      return {
        ...state,
        raw: action.payload,
      };
    }
    case GamesHomeActionEnum.FilterByCategory: {
      return {
        ...state,
        category: action.payload,
      };
    }

    case GamesHomeActionEnum.FilterByPlatform: {
      return {
        ...state,
        platform: action.payload,
      };
    }
    case GamesHomeActionEnum.SortBy: {
      return {
        ...state,
        sort_by: action.payload,
      };
    }
    case GamesHomeActionEnum.SearchGame: {
      return {
        ...state,
        data: !action.payload.length
          ? state.raw.filter((_, index) => index < state.pagination.offset + 10)
          : state.raw.filter(
              (item) =>
                item.title
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()) ||
                item.genre.toLowerCase().includes(action.payload.toLowerCase())
            ),
        pagination: {
          ...state.pagination,
          offset: 0,
        },
      };
    }

    default:
      return state;
  }
};
