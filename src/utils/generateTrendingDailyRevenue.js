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
    // console.log("date:", date.toISOString());
    return {
      date: date.toISOString(),
      revenue: Math.max(0, Math.round(trend + noise)),
    };
  });

export default generateTrendingDailyRevenue;
