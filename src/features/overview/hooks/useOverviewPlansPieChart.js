import getUsersByPlan from "../../utils/getUsersByPlan.ts";

import useGlobalFetchedData from "../../../hooks/useGlobalFetchedData.ts";

const useOverviewPlansPieChartStats = (pieColors) => {
  const { globalStatus, data } = useGlobalFetchedData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { usersData, subsData } = data;

  const totalUsers = usersData?.length || 0;

  const usersByPlan = getUsersByPlan(usersData, subsData, pieColors);

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    totalUsers,
    usersByPlan,
  };
};

export default useOverviewPlansPieChartStats;
