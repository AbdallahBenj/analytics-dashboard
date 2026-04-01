import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useFetchedGenerateData from "./useFetchedGenerateData.js";

const useDashboardPlansPieChartStats = (pieColors) => {
  const { isLoading, isErrors, fetchedUsersData, fetchedSubsData } =
    useFetchedGenerateData();

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
