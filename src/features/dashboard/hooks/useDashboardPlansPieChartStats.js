import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useGlobalFetchedData from "./useGlobalFetchedData.js";

const useDashboardPlansPieChartStats = (pieColors) => {
  const { fetchedData } = useGlobalFetchedData();
  const { isDataLoading, isDataErrors, usersData, subsData } = fetchedData;

  const totalUsers = usersData?.length || 0;

  const usersByPlan = getUsersByPlan(usersData, subsData, pieColors);

  return {
    isDataLoading,
    isDataErrors,
    totalUsers,
    usersByPlan,
  };
};

export default useDashboardPlansPieChartStats;
