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

// Usage
const revenue30d = generateTrendingDailyRevenue({
  days: 30,
  start: 120,
  dailyGrowth: 2,
  volatility: 12,
});

const revenue90d = generateTrendingDailyRevenue({
  days: 90,
  start: 80,
  dailyGrowth: 1.2,
  volatility: 18,
});

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

// Usage
const revenue6m = generateTrendingMonthlyRevenue({
  months: 6,
  start: 2800,
  monthlyGrowth: 350,
  volatility: 180,
});

const dashboardData = {
  miniCardsData: [
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
  ],
  dailyData30: revenue30d,
  dailyData90: revenue90d,
  monthlyData6m: revenue6m,
};

export default dashboardData;
