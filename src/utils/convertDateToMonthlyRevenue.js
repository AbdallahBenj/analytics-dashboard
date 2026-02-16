const convertDateToMonthlyRevenue = (arr = []) => {
  const monthlyData = arr.reduce((acc, obj) => {
    const monthDate = new Date(obj.date).toLocaleDateString("en-US", {
      month: "short",
    });

    if (!acc[monthDate]) acc[monthDate] = 0;

    acc[monthDate] += obj.revenue;

    return acc;
  }, {});

  const sumMonthlyData = Object.entries(monthlyData).map(([date, revenue]) => ({
    date,
    revenue,
  }));

  return sumMonthlyData;
};

export default convertDateToMonthlyRevenue;
