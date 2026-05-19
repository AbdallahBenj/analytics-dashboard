import getRevenue from "../../utils/getRevenue.js";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getGrowthRate from "../../utils/getGrowthRate.js";

import useGlobalMockData from "../../../hooks/useGlobalMockData.js";

import type { Revenue } from "../../../types/utilsTypes.js";
import type { AnalyticsRevenueByPlanChartType } from "../../../types/analyticsSectionTypes.js";

const useAnalyticsRevenueByPlanChart = (): AnalyticsRevenueByPlanChartType => {
  // Get mockData
  const { mockData } = useGlobalMockData();
  const {
    isLoading,
    isErrors,

    timeline,
    payments,
  } = mockData;

  const dailyRevenue = getRevenue(timeline, payments);
  const monthlyRevenue = getRevenue(timeline, payments, "month");

  const getLast = (arr: Revenue[], n: number) => arr.slice(-n) || [];
  const getPrev = (arr: Revenue[], n: number) => arr.slice(-n * 2, -n) || [];

  const last7Days = getLast(dailyRevenue, 7); // dailyRevenue?.slice(-7) || []; // const last7Days = getLast(dailyRevenue, 7)
  const prev7Days = getPrev(dailyRevenue, 7); // dailyRevenue?.slice(-14, -7) || []; //  const last7Days = getLast(dailyRevenue, 7)

  const last30days = getLast(dailyRevenue, 30); // dailyRevenue?.slice(-30) || [];
  const prev30days = getPrev(dailyRevenue, 30); // dailyRevenue?.slice(-60, -30) || [];

  const last90days = getLast(dailyRevenue, 90); // dailyRevenue?.slice(-90) || [];
  const prev90days = getPrev(dailyRevenue, 90); // dailyRevenue?.slice(-180, -90) || [];

  const last6Months = getLast(monthlyRevenue, 6); // monthlyRevenue?.slice(-6) || [];
  const prev6Months = getPrev(monthlyRevenue, 6); // monthlyRevenue?.slice(-12, -6) || [];

  const last12Months = getLast(monthlyRevenue, 12); //  monthlyRevenue?.slice(-12) || [];

  const last7daysRevenue = getMonthlyRevenue(last7Days);
  const prev7daysRevenue = getMonthlyRevenue(prev7Days);

  const last30daysRevenue = getMonthlyRevenue(last30days);
  const prev30daysRevenue = getMonthlyRevenue(prev30days);

  const last90daysRevenue = getMonthlyRevenue(last90days);
  const prev90daysRevenue = getMonthlyRevenue(prev90days);

  const last6MonthsRevenue = getMonthlyRevenue(last6Months);
  const prev6MonthsRevenue = getMonthlyRevenue(prev6Months);

  const last12MonthsRevenue = getMonthlyRevenue(last12Months);

  const revenueGrowthRate7Days = getGrowthRate(
    last7daysRevenue,
    prev7daysRevenue,
  );

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

  const revenueByPlanChartConfig = {
    d7: {
      data: last7Days,
      xKey: "date",
      yKey: "revenue",
      basicKey: "basicRevenue",
      proKey: "proRevenue",
      label: "7 Days",
      revenueValue: last7daysRevenue,
      revenueGrowthRate: revenueGrowthRate7Days,
    },
    d30: {
      data: last30days,
      xKey: "date",
      yKey: "revenue",
      basicKey: "basicRevenue",
      proKey: "proRevenue",
      label: "30 Days",
      revenueValue: last30daysRevenue,
      revenueGrowthRate: revenueGrowthRate30Days,
    },
    d90: {
      data: last90days,
      xKey: "date",
      yKey: "revenue",
      basicKey: "basicRevenue",
      proKey: "proRevenue",
      label: "90 Days",
      revenueValue: last90daysRevenue,
      revenueGrowthRate: revenueGrowthRate90Days,
    },
    m6: {
      data: last6Months,
      xKey: "date",
      yKey: "revenue",
      basicKey: "basicRevenue",
      proKey: "proRevenue",
      label: "6 Months",
      revenueValue: last6MonthsRevenue,
      revenueGrowthRate: revenueGrowthRate6Months,
    },
    m12: {
      data: last12Months,
      xKey: "date",
      yKey: "revenue",
      basicKey: "basicRevenue",
      proKey: "proRevenue",
      label: "12 Months",
      revenueValue: last12MonthsRevenue,
      revenueGrowthRate: null,
    },
  };

  return {
    isDataAndEventsLoading: isLoading,
    isDataAndEventsErrors: isErrors,
    revenueByPlanChartConfig,
  };
};

export default useAnalyticsRevenueByPlanChart;
