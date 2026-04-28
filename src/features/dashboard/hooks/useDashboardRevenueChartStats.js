import getRevenue from "../../utils/getRevenue.js";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getPerCentValue from "../../../utils/getPerCentValue.ts";

import useGlobalFetchedData from "../../../hooks/useGlobalFetchedData.ts";

const useDashboardRevenueChartStats = () => {
  const { globalStatus, data } = useGlobalFetchedData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { timeData, paymentsData } = data;

  const dailyRevenue = getRevenue(timeData, paymentsData);
  const monthlyRevenue = getRevenue(timeData, paymentsData, "month");

  const dailyRevenueLast30days = dailyRevenue?.slice(-30) || [];
  const dailyRevenuePrev30days = dailyRevenue?.slice(-60, -30) || [];
  const dailyRevenueLast90days = dailyRevenue?.slice(-90) || [];

  const monthlyRevenueLast6Months = monthlyRevenue?.slice(-6) || [];

  const last30daysRevenue = getMonthlyRevenue(dailyRevenueLast30days); // used
  const prev30daysRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const perCent30daysRevenue = getPerCentValue(
    last30daysRevenue,
    prev30daysRevenue,
  );

  const revenueRangeConfig = {
    d30: {
      data: dailyRevenueLast30days,
      xKey: "date",
      yKey: "revenue",
      label: "30 Days",
    },
    d90: {
      data: dailyRevenueLast90days,
      xKey: "date",
      yKey: "revenue",
      label: "90 Days",
    },
    m6: {
      data: monthlyRevenueLast6Months,
      xKey: "date",
      yKey: "revenue",
      label: "6 Months",
    },
  };

  return {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    last30daysRevenue,
    perCent30daysRevenue,
    revenueRangeConfig,
  };
};

export default useDashboardRevenueChartStats;
