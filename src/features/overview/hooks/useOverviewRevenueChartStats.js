import getRevenue from "../../utils/getRevenue.ts";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getGrowthRate from "../../utils/getGrowthRate.js";

import useGlobalFetchedData from "../../../hooks/useGlobalFetchedData.ts";

const useDashboardRevenueChartStats = () => {
  const { globalStatus, data } = useGlobalFetchedData();
  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { timeData, paymentsData } = data;

  const dailyRevenue = getRevenue(timeData, paymentsData);
  const monthlyRevenue = getRevenue(timeData, paymentsData, "month");

  const getLast = (arr, n) => arr?.slice(-n) || [];
  const getPrev = (arr, n) => arr?.slice(-n * 2, -n) || [];

  const last30days = getLast(dailyRevenue, 30); // dailyRevenue?.slice(-30) || [];
  const prev30days = getPrev(dailyRevenue, 30); // dailyRevenue?.slice(-60, -30) || [];
  const last90days = getLast(dailyRevenue, 90); // dailyRevenue?.slice(-90) || [];

  const last6Months = getLast(monthlyRevenue, 6); // monthlyRevenue?.slice(-6) || [];

  const last30daysRevenue = getMonthlyRevenue(last30days); // used
  const prev30daysRevenue = getMonthlyRevenue(prev30days);

  const growthRate30daysRevenue = getGrowthRate(
    last30daysRevenue,
    prev30daysRevenue,
  );

  const isRevenueGrowing =
    last30daysRevenue != null &&
    prev30daysRevenue != null &&
    last30daysRevenue > prev30daysRevenue;

  const revenueChartConfig = {
    d30: {
      data: last30days,
      xKey: "date",
      yKey: "revenue",
      label: "30 Days",
    },
    d90: {
      data: last90days,
      xKey: "date",
      yKey: "revenue",
      label: "90 Days",
    },
    m6: {
      data: last6Months,
      xKey: "date",
      yKey: "revenue",
      label: "6 Months",
    },
  };

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,

    last30daysRevenue,
    growthRate30daysRevenue,

    isRevenueGrowing,
    revenueChartConfig,
  };
};

export default useDashboardRevenueChartStats;
