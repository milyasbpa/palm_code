import React, { createContext, useReducer, Dispatch } from "react";
import {
  PersonalStatementsActions,
  InitialStateType,
} from "./PersonalStatements.types";
import { PersonalStatementsCategoryReducer } from "./PersonalStatements.reducers";

const initialState: InitialStateType = {
  category: {
    data: [],
  },
};

const PersonalStatementsContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<PersonalStatementsActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { category }: InitialStateType,
  action: PersonalStatementsActions
) => ({
  category: PersonalStatementsCategoryReducer(category, action),
});

const PersonalStatementsProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <PersonalStatementsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PersonalStatementsContext.Provider>
  );
};

export { PersonalStatementsProvider, PersonalStatementsContext };
