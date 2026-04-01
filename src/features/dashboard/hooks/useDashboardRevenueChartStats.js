import calculateRevenue from "../../utils/calculateRevenue.js";

import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getPerCentValue from "../../../utils/getPerCentValue.js";

import useFetchedGenerateData from "./useFetchedGenerateData.js";

const useDashboardRevenueChartStats = () => {
  const { isLoading, isErrors, fetchedTimeData, fetchedPaymentsData } =
    useFetchedGenerateData();

  const dailyRevenue = calculateRevenue(fetchedTimeData, fetchedPaymentsData);
  const monthlyRevenue = calculateRevenue(
    fetchedTimeData,
    fetchedPaymentsData,
    "month",
  );

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
    isLoading,
    isErrors,
    lastMonthRevenue,
    perCentMonthlyRevenue,
    revenueRangeConfig,
  };
};

export default useDashboardRevenueChartStats;
