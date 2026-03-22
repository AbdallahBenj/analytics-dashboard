const getConversionRate = (users = [], subscriptions = [], days = 0) => {
  const toDay = new Date();

  const endPeriod = new Date(toDay);
  endPeriod.setDate(endPeriod.getDate() - days);

  const startPeriod = new Date(endPeriod);
  startPeriod.setDate(startPeriod.getDate() - 30);

  const usersAtStart = users.filter(
    (user) => new Date(user.userCreatedAt) < startPeriod,
  );

  const subUsersAtStart = subscriptions.filter((sub) => {
    const start = new Date(sub.subsStartDate);
    const end = new Date(sub.subsEndDate);

    return start < startPeriod && end >= startPeriod;
  });

  const freeAtStart = usersAtStart.length - subUsersAtStart.length;

  const activatedInPeriod = subscriptions.filter((sub) => {
    const start = new Date(sub.subsStartDate);
    return start >= startPeriod && start < endPeriod;
  });

  const conversionRate =
    freeAtStart === 0 ? 0 : activatedInPeriod.length / freeAtStart;

  return conversionRate;
};

export default getConversionRate;
