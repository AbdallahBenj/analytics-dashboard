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
    value: 10,
    Icon: CurrencyDollarIcon,
  },
  {
    id: 2,
    name: "AS",
    title: "Active Subscriptions",
    value: 50,
    Icon: UserIcon,
  },
  {
    id: 3,
    name: "CR",
    title: "Churn Rate",
    value: 75,
    Icon: ArrowTrendingDownIcon,
  },
  {
    id: 4,
    name: "CR",
    title: "Conversion Rate",
    value: 90,
    Icon: ArrowPathIcon,
  },
];

export default dashboardMiniCardData;
