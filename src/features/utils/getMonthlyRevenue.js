const getMonthlyRevenue = (revenueData = [], months = 1) => {
  if (revenueData.length === 0 || months <= 0) return 0;
  const monthlyRevenue = revenueData.reduce(
    (acc, obj) => acc + Number(obj.revenue || 0),
    0,
  );
  return monthlyRevenue / months;
};

export default getMonthlyRevenue;
