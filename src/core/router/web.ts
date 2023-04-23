export const routeToLogin = () => "/";
export const routeToStatements = () => "/statements";
export const routeToStatementAnalyis = (id: number) =>
  `/statements/${id}/analysis`;
export const routeToStatementAnalysisBreakdownIncome = (id: number) =>
  `/statements/${id}/analysis/breakdown-income`;
export const routeToStatementAnalysisBreakdownOutcome = (id: number) =>
  `/statements/${id}/analysis/breakdown-outcome`;

export const routeToPersonalStatements = () => "/personal";
export const routeToPersonalAnalysis = (id: number) =>
  `/personal/${id}/analysis`;
