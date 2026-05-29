import type { Revenue } from "./utilsTypes.js";
import type {
  EventsTitle,
  UsersEvents,
  SubsEvents,
  PaymentsEvents,
} from "./dataTypes.js";

// feature Overview Section OverviewMiniCards Types

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type OverviewMiniCardsType = {
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

// feature Overview Section OverviewRevenueChart Types

type OverviewDaysRevenueChartConfigType = {
  data: Revenue[];
  label: string;
  xKey: string;
  yKey: string;
  revenueValue: number;
  revenueGrowthRate: number | null;
};

type OverviewRevenueChartConfigType = {
  d30: OverviewDaysRevenueChartConfigType;
  d90: OverviewDaysRevenueChartConfigType;
  m6: OverviewDaysRevenueChartConfigType;
};

type OverviewRevenueChartType = {
  isDataAndEventsErrors: boolean;
  isDataAndEventsLoading: boolean;
  revenueOverTimeChartConfig: OverviewRevenueChartConfigType;
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
  // data: DataType<Type>;
  events: Type[];
  eventsTitle: EventsTitle[];
  config: ConfigType<Type>;
};

type OverviewActivityTableAllEventsType = {
  usersEvents: EventsItemType<UsersEvents>;
  subsEvents: EventsItemType<SubsEvents>;
  paymentsEvents: EventsItemType<PaymentsEvents>;
};

export type {
  OverviewMiniCardsType,
  OverviewRevenueChartType,
  OverviewRevenueChartConfigType,
  OverviewPlansPieChartType,
  OverviewUsersByPlanType,
  OverviewActivityTableAllEventsType,
  AllEventsMap,
};
