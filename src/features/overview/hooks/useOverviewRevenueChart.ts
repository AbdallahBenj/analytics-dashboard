import getRevenue from "../../utils/getRevenue.js";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getGrowthRate from "../../utils/getGrowthRate.js";

import useDashboardData from "../../../hooks/useDashboardData.js";

import type { OverviewRevenueChartType } from "../../../types/overviewSectionTypes.js";
import type { Revenue } from "../../../types/utilsTypes.js";

const useOverviewRevenueChart = (): OverviewRevenueChartType => {
  // Get DashboardData
  const { dashboardData } = useDashboardData();
  const {
    isLoading,
    isErrors,

    timeline,
    payments,
  } = dashboardData;

  const dailyRevenue = getRevenue(timeline ?? [], payments ?? []);
  const monthlyRevenue = getRevenue(timeline ?? [], payments ?? [], "month");

  const getLast = (arr: Revenue[], n: number) => arr.slice(-n) || [];
  const getPrev = (arr: Revenue[], n: number) => arr.slice(-n * 2, -n) || [];

  const last30days = getLast(dailyRevenue, 30);
  const prev30days = getPrev(dailyRevenue, 30);

  const last90days = getLast(dailyRevenue, 90);
  const prev90days = getPrev(dailyRevenue, 90);

  const last6Months = getLast(monthlyRevenue, 6);
  const prev6Months = getPrev(monthlyRevenue, 6);

  const last30daysRevenue = getMonthlyRevenue(last30days);
  const prev30daysRevenue = getMonthlyRevenue(prev30days);

  const last90daysRevenue = getMonthlyRevenue(last90days);
  const prev90daysRevenue = getMonthlyRevenue(prev90days);

  const last6MonthsRevenue = getMonthlyRevenue(last6Months);
  const prev6MonthsRevenue = getMonthlyRevenue(prev6Months);

  const revenueGrowthRate30Days = getGrowthRate(
    last30daysRevenue,
    prev30daysRevenue,
  );

  const revenueGrowthRate90Days = getGrowthRate(
    last90daysRevenue,
    prev90daysRevenue,
  );

  const revenueGrowthRate6Months = getGrowthRate(
    last6MonthsRevenue,
    prev6MonthsRevenue,
  );

  const revenueOverTimeChartConfig = {
    d30: {
      data: last30days,
      xKey: "date",
      yKey: "revenue",
      label: "30 Days",
      revenueValue: last30daysRevenue,
      revenueGrowthRate: revenueGrowthRate30Days,
    },
    d90: {
      data: last90days,
      xKey: "date",
      yKey: "revenue",
      label: "90 Days",
      revenueValue: last90daysRevenue,
      revenueGrowthRate: revenueGrowthRate90Days,
    },
    m6: {
      data: last6Months,
      xKey: "date",
      yKey: "revenue",
      label: "6 Months",
      revenueValue: last6MonthsRevenue,
      revenueGrowthRate: revenueGrowthRate6Months,
    },
  };

  return {
    isDataAndEventsLoading: isLoading,
    isDataAndEventsErrors: isErrors,
    revenueOverTimeChartConfig,
  };
};

export default useOverviewRevenueChart;
