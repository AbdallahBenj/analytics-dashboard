import type { Revenue } from "./utilsTypes.js";
import type {
  EventsTitle,
  UsersEvents,
  SubsEvents,
  PaymentsEvents,
} from "./eventsTypes.ts";

// feature Overview MiniCardsData Types

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

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

// feature Overview RevenueChartConfig Types

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

// feature Overview PlansPieChart Types

type OverviewUsersByPlanType = {
  name: string;
  value: number;
  fill: string;
};

type OverviewPlansPieChartType = {
  isDataAndEventsLoading: boolean;
  isDataAndEventsErrors: boolean;
  totalUsers: number;
  usersByPlan: OverviewUsersByPlanType[];
};

// feature Overview ActivityTableAllEvents Types

type AllEventsMap = {
  usersEvents: UsersEvents;
  subsEvents: SubsEvents;
  paymentsEvents: PaymentsEvents;
};

type DataType<Type> = {
  events: Type[];
  eventsTitle: EventsTitle[];
};

type ColumnsType<Type> = {
  key: keyof Type;
  colored?: boolean;
};

type ConfigType<Type> = {
  id: keyof Type;
  columns: ColumnsType<Type>[];
};

type EventsItemType<Type> = {
  label: string;
  data: DataType<Type>;
  config: ConfigType<Type>;
};

type OverviewActivityTableAllEventsType = {
  usersEvents: EventsItemType<UsersEvents>;
  subsEvents: EventsItemType<SubsEvents>;
  paymentsEvents: EventsItemType<PaymentsEvents>;
};

export type {
  OverviewMiniCardsDataType,
  OverviewRevenueChartType,
  OverviewRevenueChartConfigType,
  OverviewPlansPieChartType,
  OverviewUsersByPlanType,
  OverviewActivityTableAllEventsType,
  AllEventsMap,
};
