// Analytics Revenue By Plan Chart Types

import type { Revenue } from "./utilsTypes.js";

type AnalyticsDaysRevenueByPlanChartConfigType = {
  data: Revenue[];
  label: string;
  xKey: string;
  yKey: string;
  basicKey: string;
  proKey: string;
  revenueValue: number;
  revenueGrowthRate: number | null;
};

type AnalyticsRevenueByPlanChartConfigType = {
  d7: AnalyticsDaysRevenueByPlanChartConfigType;
  d30: AnalyticsDaysRevenueByPlanChartConfigType;
  d90: AnalyticsDaysRevenueByPlanChartConfigType;
  m6: AnalyticsDaysRevenueByPlanChartConfigType;
  m12: AnalyticsDaysRevenueByPlanChartConfigType;
};

type AnalyticsRevenueByPlanChartType = {
  isDataAndEventsErrors: boolean;
  isDataAndEventsLoading: boolean;
  revenueByPlanChartConfig: AnalyticsRevenueByPlanChartConfigType;
};

export type {
  AnalyticsRevenueByPlanChartType,
  AnalyticsRevenueByPlanChartConfigType,
};
