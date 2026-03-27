const getConversionRate = (users = [], subscriptions = [], days = 0) => {
  if (days < 0) return 0;
  const toDay = new Date();

  const endPeriod = new Date(toDay);
  endPeriod.setDate(endPeriod.getDate() - days);

  const startPeriod = new Date(endPeriod);
  startPeriod.setDate(startPeriod.getDate() - 30);

  // Users existing before startPeriod

  const usersAtStart = users.filter(
    (user) => new Date(user.userCreatedAt) < startPeriod,
  );

  // Subscriptions active at startPeriod

  const subUsersAtStart = subscriptions.filter((sub) => {
    const start = new Date(sub.subsStartDate);
    const end = sub.subsEndDate ? new Date(sub.subsEndDate) : null;

    return start < startPeriod && (!end || end >= startPeriod);
  });

  // Users who were free at start

  const subUsersIds = new Set(subUsersAtStart.map((sub) => sub.userId));
  const freeAtStart = usersAtStart.filter(
    (user) => !subUsersIds.has(user.userId),
  );
  // Activated subscriptions during the period (unique users)

  const activatedInPeriod = subscriptions.filter((sub) => {
    const start = new Date(sub.subsStartDate);
    return start >= startPeriod && start < endPeriod;
  });

  const activatedUsersId = new Set(activatedInPeriod.map((sub) => sub.userId));

  const conversionRate =
    freeAtStart.length === 0 ? 0 : activatedUsersId.size / freeAtStart.length;

  return conversionRate;
};

export default getConversionRate;
