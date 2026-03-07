const getChurnRate = (subscriptions = [], days = 0) => {
  const toDay = new Date();
  const endPeriod = new Date(toDay);
  endPeriod.setDate(endPeriod.getDate() - days);
  const startPeriod = new Date(endPeriod);
  startPeriod.setDate(startPeriod.getDate() - 30);

  const activeAtStart = subscriptions.filter((sub) => {
    const start = new Date(sub.startDate);
    const end = new Date(sub.endDate);

    return start <= startPeriod && (end > startPeriod || !sub.endDate);
  });

  const canceledInPeriod = activeAtStart.filter((sub) => {
    const end = new Date(sub.endDate);

    return end >= startPeriod && end <= endPeriod;
  });

  const churnRate =
    activeAtStart.length === 0
      ? 0
      : canceledInPeriod.length / activeAtStart.length;

  return churnRate;
};

export default getChurnRate;
