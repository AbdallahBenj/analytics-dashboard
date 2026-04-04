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
  const { globalStatus, fetchedData } = useGlobalFetchedData();

  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;

  const { timeData, usersData, subsData, paymentsData } = fetchedData;

  const dailyRevenue = useMemo(() => {
    return calculateRevenue(timeData, paymentsData);
  }, [timeData, paymentsData]);

  const dailyRevenueLast30days = dailyRevenue?.slice(-30);
  const dailyRevenuePrev30days = dailyRevenue?.slice(-60, -30);

  const LastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const previousMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);
  const monthlyRevenuePerCent = getPerCentValue(
    LastMonthRevenue,
    previousMonthRevenue,
  );

  const activeSubscriptions = getActiveSubscriptions(subsData);
  const totalActiveSubscriptions = activeSubscriptions.length;

  const lastMonthChurnRate = getChurnRate(subsData);

  const prevMonthChurnRate = getChurnRate(subsData, 30);
  const churnRate = lastMonthChurnRate * 100;
  const prevChurnRate = prevMonthChurnRate * 100;

  const monthlyChurnRatePerCent = getPerCentValue(
    lastMonthChurnRate,
    prevMonthChurnRate,
  );

  const currentConversionRate = getConversionRate(usersData, subsData);

  const conversionRate = currentConversionRate * 100;

  return {
    miniCardsData: [
      {
        id: 1,
        name: "MRR",
        title: "Monthly Revenue",
        isDataAndEventsLoading,
        isDataAndEventsErrors,
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
        isDataAndEventsLoading,
        isDataAndEventsErrors,
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
        isDataAndEventsLoading,
        isDataAndEventsErrors,
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
        isDataAndEventsLoading,
        isDataAndEventsErrors,
        value: conversionRate,
        percentageValue: null,
        unit: "%",
        Icon: ArrowPathIcon,
      },
    ],
  };
};

export default useDashboardMiniCardsStats;
