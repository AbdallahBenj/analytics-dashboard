import { useMemo } from "react";

import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

import type { OverviewMiniCardsType } from "../../../types/overviewSectionTypes.js";

import getRevenue from "../../utils/getRevenue.js";
import getMonthlyRevenue from "../../utils/getMonthlyRevenue.js";
import getActiveSubscriptions from "../../utils/getActiveSubscriptions.js";

import getChurnRate from "../../utils/getChurnRate.js";
import getConversionRate from "../../utils/getConversionRate.js";
import getGrowthRate from "../../utils/getGrowthRate.js";

import formatCurrencyCompact from "../../../utils/formatCurrencyCompact.js";
import formatCompact from "../../../utils/formatCompact.js";
import formatPercent from "../../../utils/formatPercent.js";

import useGlobalMockData from "../../../hooks/useGlobalMockData.js";
import useDashboardData from "../../../hooks/useDashboardData.js";

const useOverviewMiniCards = (): {
  miniCardsData: OverviewMiniCardsType[];
} => {
  // Get mockData
  const { dashboardData } = useDashboardData();
  const {
    isLoading,
    isErrors,

    timeline,
    users,
    subscriptions,
    payments,
  } = dashboardData;

  // test mockData end

  // Revenue calculation (memoized)
  const dailyRevenue = useMemo(() => {
    return getRevenue(timeline, payments);
  }, [timeline, payments]);

  const dailyRevenueLast30days = dailyRevenue?.slice(-30) ?? [];
  const dailyRevenuePrev30days = dailyRevenue?.slice(-60, -30) ?? [];

  const lastMonthRevenue = getMonthlyRevenue(dailyRevenueLast30days);
  const previousMonthRevenue = getMonthlyRevenue(dailyRevenuePrev30days);

  const revenueGrowthRate = getGrowthRate(
    lastMonthRevenue,
    previousMonthRevenue,
  );

  const isRevenueGrowing =
    lastMonthRevenue != null &&
    previousMonthRevenue != null &&
    lastMonthRevenue > previousMonthRevenue;

  // Subscriptions
  const activeSubscriptions = getActiveSubscriptions(subscriptions);
  const totalActiveSubscriptions = activeSubscriptions?.length || 0;

  // Churn
  const lastMonthChurnRate = getChurnRate(subscriptions);
  const prevMonthChurnRate = getChurnRate(subscriptions, 30);

  const churnGrowthRate = getGrowthRate(lastMonthChurnRate, prevMonthChurnRate);

  const isChurnImproving = lastMonthChurnRate < prevMonthChurnRate;

  // Conversion
  const conversionRate = getConversionRate(users, subscriptions);

  return {
    miniCardsData: [
      {
        id: 1,
        name: "MRR", // $
        title: "Monthly Revenue",
        isDataAndEventsLoading: isLoading,
        isDataAndEventsErrors: isErrors,
        value: formatCurrencyCompact(lastMonthRevenue ?? 0, 2),
        prevValue: previousMonthRevenue ?? 0,
        growthRateValue: revenueGrowthRate,
        isGoodChange: isRevenueGrowing,
        Icon: CurrencyDollarIcon,
      },
      {
        id: 2,
        name: "AS", // user
        title: "Active Subscriptions",
        isDataAndEventsLoading: isLoading,
        isDataAndEventsErrors: isErrors,
        value: formatCompact(totalActiveSubscriptions, 2),
        prevValue: null,
        growthRateValue: null,
        isGoodChange: null,
        Icon: UserIcon,
      },
      {
        id: 3,
        name: "ChurnR", // %
        title: "Churn Rate",
        isDataAndEventsLoading: isLoading,
        isDataAndEventsErrors: isErrors,
        value: formatPercent(lastMonthChurnRate ?? 0),
        prevValue: prevMonthChurnRate ?? 0,
        growthRateValue: churnGrowthRate,
        isGoodChange: isChurnImproving,
        Icon: ArrowTrendingDownIcon,
      },
      {
        id: 4,
        name: "ConversionR", // %
        title: "Conversion Rate",
        isDataAndEventsLoading: isLoading,
        isDataAndEventsErrors: isErrors,
        value: formatPercent(conversionRate ?? 0),
        prevValue: null,
        growthRateValue: null,
        isGoodChange: null,
        Icon: ArrowPathIcon,
      },
    ],
  };
};

export default useOverviewMiniCards;
