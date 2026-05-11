import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useGlobalMockData from "../../../hooks/useGlobalMockData.js";

import type { OverviewPlansPieChartType } from "../../../types/featuresTypes.tsx";

type PieColors = {
  free: string;
  basic: string;
  pro: string;
};

const useOverviewPlansPieChart = (
  pieColors: PieColors,
): OverviewPlansPieChartType => {
  const { globalStatus, data } = useGlobalMockData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { usersData, subsData } = data;

  const totalUsers = usersData?.length || 0;

  const usersByPlan = getUsersByPlan(
    usersData ?? [],
    subsData ?? [],
    pieColors,
  );

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    totalUsers,
    usersByPlan,
  };
};

export default useOverviewPlansPieChart;
