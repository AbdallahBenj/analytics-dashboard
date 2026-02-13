import {
  CurrencyDollarIcon,
  UserIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

// Generate Trending Daily Revenue

const generateTrendingDailyRevenue = ({
  days,
  start = 100,
  dailyGrowth = 1.5,
  volatility = 15,
}) =>
  Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i - 1));

    const trend = start + i * dailyGrowth;
    const noise = (Math.random() - 0.5) * volatility;

    return {
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      revenue: Math.max(0, Math.round(trend + noise)),
    };
  });

// Usage Generate 180 90 30 days Revenue

const revenue180d = generateTrendingDailyRevenue({ days: 180 });
const revenue90d = revenue180d.slice(-90);
const revenue30d = revenue180d.slice(-30);

// Generate Trending Monthly Revenue

const generateTrendingMonthlyRevenue = ({
  months,
  start = 2500,
  monthlyGrowth = 300,
  volatility = 200,
}) =>
  Array.from({ length: months }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (months - i - 1));

    const trend = start + i * monthlyGrowth;
    const noise = (Math.random() - 0.5) * volatility;

    return {
      month: date.toLocaleDateString("en-US", { month: "short" }),
      revenue: Math.max(0, Math.round(trend + noise)),
    };
  });

// Usage Generate 6 Months

const revenue6m = generateTrendingMonthlyRevenue({ months: 6 });

// Get Monthly Revenue

const getMonthlyRevenue = (arr, months = 1) => {
  const allRevenue = arr.map((obj) => obj.revenue);
  const monthlyRevenue = allRevenue.reduce((acc, curr) => acc + curr) / months;
  return monthlyRevenue;
};

const lastMonthRevenue = getMonthlyRevenue(revenue180d.slice(-30));
const prevMonthRevenue = getMonthlyRevenue(revenue180d.slice(-60, -30));

const getPerCentMonthlyRevenue = () => {
  if (prevMonthRevenue === 0) return 0;

  const perCentRevenue = (
    ((lastMonthRevenue - prevMonthRevenue) / prevMonthRevenue) *
    100
  ).toFixed(2);

  console.log("perCentRevenue:", perCentRevenue);
  return perCentRevenue;
};

const dashboardData = {
  miniCardsData: [
    {
      id: 1,
      name: "MRR", // MRR
      title: "Monthly Revenue",
      value: getMonthlyRevenue(revenue180d.slice(-30)), //48.25,
      prevValue: getMonthlyRevenue(revenue180d.slice(-60, -30)), // 48.2,
      unit: "$",
      Icon: CurrencyDollarIcon,
    },
    {
      id: 2,
      name: "AS",
      title: "Active Subscriptions",
      value: 1.12,
      unit: "K",
      Icon: UserIcon,
    },
    {
      id: 3,
      name: "CR",
      title: "Churn Rate",
      type: "churn",
      value: 3.1,
      prevValue: 3.0,
      unit: "%",
      Icon: ArrowTrendingDownIcon,
    },
    {
      id: 4,
      name: "CR",
      title: "Conversion Rate",
      value: 6.4,
      unit: "%",
      Icon: ArrowPathIcon,
    },
  ],
  dailyData30: revenue30d,
  dailyData90: revenue90d,
  monthlyData6m: revenue6m,

  monthlyRevenue: getMonthlyRevenue(revenue30d),
  perCentMonthlyRevenue: getPerCentMonthlyRevenue(revenue90d),
};

export default dashboardData;
