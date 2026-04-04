import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useGlobalFetchedData from "./useGlobalFetchedData.js";

const useDashboardPlansPieChartStats = (pieColors) => {
  const { globalStatus, fetchedData } = useGlobalFetchedData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { usersData, subsData } = fetchedData;

  const totalUsers = usersData?.length || 0;

  const usersByPlan = getUsersByPlan(usersData, subsData, pieColors);

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    totalUsers,
    usersByPlan,
  };
};

export default useDashboardPlansPieChartStats;
