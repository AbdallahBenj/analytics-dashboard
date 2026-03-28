import { useMemo } from "react";

import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

import calculateRevenue from "../../utils/calculateRevenue.js";
import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getActiveSubscriptions from "../../utils/getActiveSubscriptions.js";

import getChurnRate from "../../utils/getChurnRate.js";
import getConversionRate from "../../utils/getConversionRate.js";

import getPerCentValue from "../../../utils/getPerCentValue.js";

import useFetchedGenerateData from "./useFetchedGenerateData.js";

const useDashboardMiniCardsStats = () => {
  const {
    isLoading,
    fetchedTimeData,
    fetchedUsersData,
    fetchedSubsData,
    fetchedPaymentsData,
  } = useFetchedGenerateData();

  const dailyRevenue = useMemo(() => {
    return calculateRevenue(fetchedTimeData, fetchedPaymentsData);
  }, [fetchedTimeData, fetchedPaymentsData]);

  const dailyRevenueLast30days = dailyRevenue?.slice(-30);
  const dailyRevenuePrev30days = dailyRevenue?.slice(-60, -30);

  const LastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const previousMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);
  const monthlyRevenuePerCent = getPerCentValue(
    LastMonthRevenue,
    previousMonthRevenue,
  );

  const activeSubscriptions = getActiveSubscriptions(fetchedSubsData);
  const totalActiveSubscriptions = activeSubscriptions.length;

  const lastMonthChurnRate = getChurnRate(fetchedSubsData);

  const prevMonthChurnRate = getChurnRate(fetchedSubsData, 30);
  const churnRate = lastMonthChurnRate * 100;
  const prevChurnRate = prevMonthChurnRate * 100;

  const monthlyChurnRatePerCent = getPerCentValue(
    lastMonthChurnRate,
    prevMonthChurnRate,
  );

  const currentConversionRate = getConversionRate(
    fetchedUsersData,
    fetchedSubsData,
  );

  const conversionRate = currentConversionRate * 100;

  return {
    miniCardsData: [
      {
        id: 1,
        name: "MRR",
        title: "Monthly Revenue",
        loading: isLoading,
        value: LastMonthRevenue || 0.0,
        prevValue: previousMonthRevenue || 0.0,
        percentageValue: monthlyRevenuePerCent,
        unit: "$",
        Icon: CurrencyDollarIcon,
      },
      {
        id: 2,
        name: "AS",
        title: "Active Subscriptions",
        loading: isLoading,
        value: totalActiveSubscriptions || 0.0,
        percentageValue: null,
        unit: "user",
        Icon: UserIcon,
      },
      {
        id: 3,
        name: "ChurnR",
        title: "Churn Rate",
        type: "churn",
        loading: isLoading,
        value: churnRate || 0.0,
        prevValue: prevChurnRate || 0.0,
        percentageValue: monthlyChurnRatePerCent,
        unit: "%",
        Icon: ArrowTrendingDownIcon,
      },
      {
        id: 4,
        name: "ConversionR",
        title: "Conversion Rate",
        loading: isLoading,
        value: conversionRate || 0.0,
        percentageValue: null,
        unit: "%",
        Icon: ArrowPathIcon,
      },
    ],
  };
};

export default useDashboardMiniCardsStats;
