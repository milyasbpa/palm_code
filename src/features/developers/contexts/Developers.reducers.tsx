import {
  DevelopersActionEnum,
  DevelopersActions,
  IGamesDevelopers,
} from "./Developers.types";

export const GamesDevelopersReducer = (
  state: IGamesDevelopers,
  action: DevelopersActions
) => {
  switch (action.type) {
    case DevelopersActionEnum.SetGamesData: {
      return action.payload;
    }
    case DevelopersActionEnum.AddGameData: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          offset: state.pagination.offset + 4,
        },
        data: action.payload,
      };
    }
    case DevelopersActionEnum.SetRawData: {
      return {
        ...state,

        raw: action.payload,
      };
    }

    default:
      return state;
  }
};
