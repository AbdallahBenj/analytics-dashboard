import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useGlobalFetchedData from "./useGlobalFetchedData.js";

const useDashboardPlansPieChartStats = (pieColors) => {
  const { isLoading, isErrors, fetchedUsersData, fetchedSubsData } =
    useGlobalFetchedData();

  const totalUsers = fetchedUsersData?.length || 0;

  const usersByPlan = getUsersByPlan(
    fetchedUsersData,
    fetchedSubsData,
    pieColors,
  );

  return {
    isLoading,
    isErrors,
    totalUsers: totalUsers,
    usersByPlan: usersByPlan,
  };
};

export default useDashboardPlansPieChartStats;
