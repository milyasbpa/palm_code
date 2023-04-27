import {
  DeveloperActionEnum,
  DeveloperActions,
  IGamesDeveloper,
} from "./Developer.types";

export const GamesDeveloperReducer = (
  state: IGamesDeveloper,
  action: DeveloperActions
) => {
  switch (action.type) {
    case DeveloperActionEnum.SetGamesData: {
      return action.payload;
    }
    case DeveloperActionEnum.AddGameData: {
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
