const getPerCentValue = (
  revenue: number,
  prevRevenue: number,
): number | null => {
  const perCentRevenue =
    prevRevenue && prevRevenue !== 0
      ? Number((((revenue - prevRevenue) / prevRevenue) * 100).toFixed(2))
      : null;

  return perCentRevenue;
};

export default getPerCentValue;
