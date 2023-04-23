import {
  IPersonalStatementsCategory,
  PersonalStatementsActionEnum,
  PersonalStatementsActions,
} from "./PersonalStatements.types";

// Category
export const PersonalStatementsCategoryReducer = (
  state: IPersonalStatementsCategory,
  action: PersonalStatementsActions
) => {
  switch (action.type) {
    case PersonalStatementsActionEnum.SetCategoryData:
      return action.payload;

    default:
      return state;
  }
};
