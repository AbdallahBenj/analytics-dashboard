type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
import type { Revenue } from "./utilsTypes.js";

type OverviewMiniCardsDataType = {
  id: number;
  name: string;
  title: string;
  isDataAndEventsLoading: boolean;
  isDataAndEventsErrors: boolean;
  value: string;
  prevValue: number | null;
  growthRateValue: number | null;
  isGoodChange: boolean | null;
  Icon: IconType;
};

type DaysRevenueChartConfigType = {
  data: Revenue[];
  label: string;
  xKey: string;
  yKey: string;
};

type OverviewRevenueChartConfigType = {
  d30: DaysRevenueChartConfigType;
  d90: DaysRevenueChartConfigType;
  m6: DaysRevenueChartConfigType;
};

type OverviewRevenueChartType = {
  growthRate30daysRevenue: number | null;
  isDataAndEventsErrors: boolean;
  isDataAndEventsLoading: boolean;
  isRevenueGrowing: boolean | null;
  last30daysRevenue: number | null;
  revenueChartConfig: OverviewRevenueChartConfigType;
};

export type {
  OverviewMiniCardsDataType,
  OverviewRevenueChartType,
  OverviewRevenueChartConfigType,
};
