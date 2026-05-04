import { useMemo } from "react";

import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

import getRevenue from "../../utils/getRevenue.js";
import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getActiveSubscriptions from "../../utils/getActiveSubscriptions.js";

import getChurnRate from "../../utils/getChurnRate.js";
import getConversionRate from "../../utils/getConversionRate.js";
import getGrowthRate from "../../utils/getGrowthRate.js";

import formatCurrencyCompact from "../../../utils/formatCurrencyCompact.js";
import formatCompact from "../../../utils/formatCompact.js";
import formatPercent from "../../../utils/formatPercent.js";

import useGlobalFetchedData from "../../../hooks/useGlobalFetchedData.js";

const useDashboardMiniCardsStats = () => {
  const { globalStatus, data } = useGlobalFetchedData();
  const { isDataAndEventsLoading, isDataAndEventsErrors } = globalStatus;
  const { timeData, usersData, subsData, paymentsData } = data;

  const dailyRevenue = useMemo(() => {
    return getRevenue(timeData, paymentsData);
  }, [timeData, paymentsData]);

  const dailyRevenueLast30days = (dailyRevenue || [])?.slice(-30);
  const dailyRevenuePrev30days = (dailyRevenue || [])?.slice(-60, -30);

  const lastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const previousMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const growthRateMonthlyRevenue = getGrowthRate(
    lastMonthRevenue,
    previousMonthRevenue,
  );

  const isRevenueGrowing = lastMonthRevenue > previousMonthRevenue;

  const activeSubscriptions = getActiveSubscriptions(subsData);
  const totalActiveSubscriptions = activeSubscriptions.length;

  const lastMonthChurnRate = getChurnRate(subsData);
  const prevMonthChurnRate = getChurnRate(subsData, 30);

  const churnRate = lastMonthChurnRate;
  const prevChurnRate = prevMonthChurnRate;
  const growthRateMonthlyChurnRate = getGrowthRate(
    lastMonthChurnRate,
    prevMonthChurnRate,
  );

  const isChurnImproving = lastMonthChurnRate < prevMonthChurnRate;

  const conversionRate = getConversionRate(usersData, subsData);

  return {
    miniCardsData: [
      {
        id: 1,
        name: "MRR", // $
        title: "Monthly Revenue",
        isDataAndEventsLoading,
        isDataAndEventsErrors,
        value: formatCurrencyCompact(lastMonthRevenue || 0), // LastMonthRevenue,
        prevValue: previousMonthRevenue || 0.0,
        growthRateValue: growthRateMonthlyRevenue, // monthlyRevenueGrowthRate, // formatPercent(growthRateValue, 2)
        isGoodChange: isRevenueGrowing,
        Icon: CurrencyDollarIcon,
      },
      {
        id: 2,
        name: "AS", // user
        title: "Active Subscriptions",
        isDataAndEventsLoading,
        isDataAndEventsErrors,
        value: formatCompact(totalActiveSubscriptions), // totalActiveSubscriptions,
        growthRateValue: null,
        isGoodChange: null,
        Icon: UserIcon,
      },
      {
        id: 3,
        name: "ChurnR", // %
        title: "Churn Rate",
        type: "churn",
        isDataAndEventsLoading,
        isDataAndEventsErrors,
        value: formatPercent(churnRate || 0), // churnRate,
        prevValue: prevChurnRate || 0.0,
        growthRateValue: growthRateMonthlyChurnRate, // monthlyChurnRateGrowthRate, // formatPercent(growthRateMonthlyChurnRate, 2)
        isGoodChange: isChurnImproving,
        Icon: ArrowTrendingDownIcon,
      },
      {
        id: 4,
        name: "ConversionR", // %
        title: "Conversion Rate",
        isDataAndEventsLoading,
        isDataAndEventsErrors,
        value: formatPercent(conversionRate), // conversionRate,
        growthRateValue: null,
        isGoodChange: null,
        Icon: ArrowPathIcon,
      },
    ],
  };
};

export default useDashboardMiniCardsStats;
