import calculateRevenue from "../../utils/calculateRevenue.js";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getPerCentValue from "../../../utils/getPerCentValue.js";

import useGlobalFetchedData from "../../dashboard/hooks/useGlobalFetchedData.js";

const useAnalyticsRevenueTrendChart = () => {
  const { globalStatus, data } = useGlobalFetchedData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { timeData, paymentsData } = data;

  const dailyRevenue = calculateRevenue(timeData, paymentsData);
  const monthlyRevenue = calculateRevenue(timeData, paymentsData, "month");

  const dailyRevenueLast7days = dailyRevenue?.slice(-7) || [];
  const dailyRevenuePrev7days = dailyRevenue?.slice(-14, -7) || [];
  const last7daysRevenue = getMonthlyRevenue(dailyRevenueLast7days);
  const prev7daysRevenue = getMonthlyRevenue(dailyRevenuePrev7days);

  const perCent7daysRevenue = getPerCentValue(
    last7daysRevenue,
    prev7daysRevenue,
  );

  const dailyRevenueLast30days = dailyRevenue?.slice(-30) || [];
  const dailyRevenuePrev30days = dailyRevenue?.slice(-60, -30) || [];
  const last30daysRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const prev30daysRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const perCent30daysRevenue = getPerCentValue(
    last30daysRevenue,
    prev30daysRevenue,
  );

  const dailyRevenueLast90days = dailyRevenue?.slice(-90) || [];
  const dailyRevenuePrev90days = dailyRevenue?.slice(-180, -90) || [];
  const last90daysRevenue = getMonthlyRevenue(dailyRevenueLast90days);
  const prev90daysRevenue = getMonthlyRevenue(dailyRevenuePrev90days);

  const perCent90daysRevenue = getPerCentValue(
    last90daysRevenue,
    prev90daysRevenue,
  );

  const monthlyRevenueLast6Months = monthlyRevenue?.slice(-6) || [];
  const monthlyRevenuePrev6Months = monthlyRevenue?.slice(-12, -6) || [];
  const last6MonthsRevenue = getMonthlyRevenue(monthlyRevenueLast6Months);
  const prev6MonthsRevenue = getMonthlyRevenue(monthlyRevenuePrev6Months);

  const perCent6MonthsRevenue = getPerCentValue(
    last6MonthsRevenue,
    prev6MonthsRevenue,
  );

  const monthlyRevenueLast12Months = monthlyRevenue?.slice(-12) || [];
  const last12MonthsRevenue = getMonthlyRevenue(monthlyRevenueLast12Months);

  const revenueRangeConfig = {
    d7: {
      data: dailyRevenueLast7days,
      xKey: "date",
      yKey: "revenue",
      label: "7 Days",
      revenueValue: last7daysRevenue,
      perCentRevenue: perCent7daysRevenue,
    },
    d30: {
      data: dailyRevenueLast30days,
      xKey: "date",
      yKey: "revenue",
      label: "30 Days",
      revenueValue: last30daysRevenue,
      perCentRevenue: perCent30daysRevenue,
    },
    d90: {
      data: dailyRevenueLast90days,
      xKey: "date",
      yKey: "revenue",
      label: "90 Days",
      revenueValue: last90daysRevenue,
      perCentRevenue: perCent90daysRevenue,
    },
    m6: {
      data: monthlyRevenueLast6Months,
      xKey: "date",
      yKey: "revenue",
      label: "6 Months",
      revenueValue: last6MonthsRevenue,
      perCentRevenue: perCent6MonthsRevenue,
    },
    m12: {
      data: monthlyRevenueLast12Months,
      xKey: "date",
      yKey: "revenue",
      label: "12 Months",
      revenueValue: last12MonthsRevenue,
      perCentRevenue: null,
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

export default useAnalyticsRevenueTrendChart;
