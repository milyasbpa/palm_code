import {
  IGamesHomeData,
  GamesHomeActionEnum,
  GamesHomeActions,
} from "./GamesHome.types";

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

    default:
      return state;
  }
};
