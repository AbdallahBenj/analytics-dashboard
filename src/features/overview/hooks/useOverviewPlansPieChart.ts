import getUsersByPlan from "../../utils/getUsersByPlan.js";

import useGlobalMockData from "../../../hooks/useGlobalMockData.js";
import useDashboardData from "../../../hooks/useDashboardData.js";

import type { OverviewPlansPieChartType } from "../../../types/overviewSectionTypes.js";

type PieColors = {
  free: string;
  basic: string;
  pro: string;
};

const useOverviewPlansPieChart = (
  pieColors: PieColors,
): OverviewPlansPieChartType => {
  // Get mockData
  const { dashboardData } = useDashboardData();
  const {
    isLoading,
    isErrors,

    users,
    subscriptions,
  } = dashboardData;

  const totalUsers = users?.length || 0;

  const usersByPlan = getUsersByPlan(
    users ?? [],
    subscriptions ?? [],
    pieColors,
  );

  return {
    isDataAndEventsLoading: isLoading,
    isDataAndEventsErrors: isErrors,
    totalUsers,
    usersByPlan,
  };
};

export default useOverviewPlansPieChart;
