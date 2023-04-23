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
  category: IPersonalStatementsCategory;
}

// State Collection Types consist of:
export interface IPersonalStatementsCategory {
  data: string[];
}

// Action Collection Types
export type PersonalStatementsActions = PersonalStatementsCategoryActions;

// Action Collection Types consist of:

export enum PersonalStatementsActionEnum {
  // category
  SetCategoryData = "SetCategoryData",
}

// category
type PersonalStatementsCategoryPayload = {
  [PersonalStatementsActionEnum.SetCategoryData]: IPersonalStatementsCategory;
};

export type PersonalStatementsCategoryActions =
  ActionMap<PersonalStatementsCategoryPayload>[keyof ActionMap<PersonalStatementsCategoryPayload>];
