export const postLoginURL = () => "/login";
export const getClientProfileURL = () => "/profile";
export const getStatementsURL = () => "/statements";
export const getStatementBalancesTrendURL = (id: number) =>
  `/statements/${id}/balance-trend`;
export const getStatementBalancesURL = (id: number) =>
  `/statements/${id}/balance`;
export const getStatementCategoriesURL = () => `/categories`;
export const getStatementFinancialOverviewURL = (id: number) =>
  `/statements/${id}/net-profit`;
export const getStatementProfileURL = (id: number) =>
  `/statements/${id}/profile`;
export const getStatementRevenueProjectionURL = (id: number) =>
  `/statements/${id}/revenue-projection`;
export const getStatementSpendingOnTheWeekendURL = (id: number) =>
  `/statements/${id}/spending-on-weekend`;
export const getStatementTotalRevenueURL = (id: number) =>
  `/statements/${id}/total-revenue`;
export const getStatementCostBreakdownURL = (id: number) =>
  `/statements/${id}/cost-breakdown`;
export const getStatementDebtListURL = (id: number) =>
  `/statements/${id}/debt-list`;
export const getStatementMerchantURL = (id: number) =>
  `/statements/${id}/merchant`;
export const postUploadStatementURL = () => `/statements/upload-statement`;
export const postAddStatementsURL = () => `/add-statement`;
export const getStatementCostBreakdownListURL = (id: number) =>
  `/statements/${id}/cost-breakdown-list`;
export const getStatementSpendingSavingComparisonURL = (id: number) =>
  `/statements/${id}/spending-saving-comparison`;
export const getStatementSavingRateProjectionURL = (id: number) =>
  `/statements/${id}/saving-projection`;
export const getStatementAverageIncomePerDayURL = (id: number) =>
  `/statements/${id}/average-income-per-day`;
export const getStatementAverageIncomePerMonthURL = (id: number) =>
  `/statements/${id}/average-income-per-month`;
export const getStatementAverageSpendingPerDayURL = (id: number) =>
  `/statements/${id}/average-spending-per-day`;
export const getStatementMostSpentAndEarnedURL = (id: number) =>
  `/statements/${id}/most-spent-and-earned`;
export const getStatementBiggestAndLowestSpendingURL = (id: number) =>
  `/statements/${id}/spending-biggest-and-lowest`;
