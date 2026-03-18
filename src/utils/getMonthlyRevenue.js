const getMonthlyRevenue = (revenueData, months = 1) => {
  const allRevenue = revenueData.map((obj) => obj.revenue);
  const monthlyRevenue = allRevenue.reduce((acc, curr) => acc + curr) / months;
  return monthlyRevenue;
};

export default getMonthlyRevenue;
