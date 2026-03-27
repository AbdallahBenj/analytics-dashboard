import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useGenerateData from "../../../service/mock/useGenerateData.js";

const useDashboardPlansPieChartStats = (pieColors) => {
  const { isLoading, fetchedUsersData, fetchedSubsData } = useGenerateData();

  const totalUsers = fetchedUsersData?.length || 0;

  const usersByPlan = getUsersByPlan(
    fetchedUsersData,
    fetchedSubsData,
    pieColors,
  );

  return {
    totalUsers: totalUsers,
    usersByPlan: usersByPlan,
    isLoading,
  };
};

export default useDashboardPlansPieChartStats;
