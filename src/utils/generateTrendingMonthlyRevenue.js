// Not Active

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

export default generateTrendingMonthlyRevenue({ months: 6 });
