const getPerCentRevenue = (revenue, prevRevenue) => {
  const perCentRevenue =
    prevRevenue && prevRevenue !== 0
      ? (((revenue - prevRevenue) / prevRevenue) * 100).toFixed(2)
      : null;

  return perCentRevenue;
};

export default getPerCentRevenue;
