const getMonthlyRevenue = (arr, months = 1) => {
  const allRevenue = arr.map((obj) => obj.revenue);
  const monthlyRevenue = allRevenue.reduce((acc, curr) => acc + curr) / months;
  return monthlyRevenue;
};

export default getMonthlyRevenue;
