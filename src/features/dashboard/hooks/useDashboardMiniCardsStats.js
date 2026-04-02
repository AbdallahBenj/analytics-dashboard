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

import useGlobalFetchedData from "./useGlobalFetchedData.js";

const useDashboardMiniCardsStats = () => {
  const {
    isLoading,
    isErrors,
    fetchedTimeData,
    fetchedUsersData,
    fetchedSubsData,
    fetchedPaymentsData,
  } = useGlobalFetchedData();

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
        isErrors,
        value: LastMonthRevenue,
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
        isErrors,
        value: totalActiveSubscriptions,
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
        isErrors,
        value: churnRate,
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
        isErrors,
        value: conversionRate,
        percentageValue: null,
        unit: "%",
        Icon: ArrowPathIcon,
      },
    ],
  };
};

export default useDashboardMiniCardsStats;
