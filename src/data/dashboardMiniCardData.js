import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

const dashboardMiniCardData = [
  {
    id: 1,
    name: "MRR", // MRR
    title: "Monthly Revenue",
    newValue: 48.25,
    lastValue: 48.2,
    unit: "$",
    Icon: CurrencyDollarIcon,
  },
  {
    id: 2,
    name: "AS",
    title: "Active Subscriptions",
    newValue: 1.12,
    unit: "K",
    Icon: UserIcon,
  },
  {
    id: 3,
    name: "CR",
    title: "Churn Rate",
    type: "churn",
    newValue: 3.1,
    lastValue: 3.0,
    unit: "%",
    Icon: ArrowTrendingDownIcon,
  },
  {
    id: 4,
    name: "CR",
    title: "Conversion Rate",
    newValue: 6.4,
    unit: "%",
    Icon: ArrowPathIcon,
  },
];

export default dashboardMiniCardData;
