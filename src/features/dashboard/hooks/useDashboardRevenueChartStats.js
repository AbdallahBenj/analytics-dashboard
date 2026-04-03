import calculateRevenue from "../../utils/calculateRevenue.js";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getPerCentValue from "../../../utils/getPerCentValue.js";

import useGlobalFetchedData from "./useGlobalFetchedData.js";

const useDashboardRevenueChartStats = () => {
  const { fetchedData } = useGlobalFetchedData();
  const { isDataLoading, isDataErrors, timeData, paymentsData } = fetchedData;

  const dailyRevenue = calculateRevenue(timeData, paymentsData);
  const monthlyRevenue = calculateRevenue(timeData, paymentsData, "month");

  const dailyRevenueLast30days = dailyRevenue?.slice(-30) || [];
  const dailyRevenuePrev30days = dailyRevenue?.slice(-60, -30) || [];
  const dailyRevenueLast90days = dailyRevenue?.slice(-90) || [];

  const lastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days); // used
  const prevMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const perCentMonthlyRevenue = getPerCentValue(
    lastMonthRevenue,
    prevMonthRevenue,
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
      data: monthlyRevenue,
      xKey: "date",
      yKey: "revenue",
      label: "6 Months",
    },
  };

  return {
    isLoading: isDataLoading,
    isErrors: isDataErrors,
    lastMonthRevenue,
    perCentMonthlyRevenue,
    revenueRangeConfig,
  };
};

export default useDashboardRevenueChartStats;
