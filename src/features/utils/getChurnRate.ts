import type { Subscription } from "../../types/dataTypes.js";

const getChurnRate = (
  subscriptions: Subscription[] = [],
  days: number = 0,
): number => {
  if (days < 0) return 0;

  const toDay = new Date();
  const endPeriod = new Date(toDay);
  endPeriod.setDate(endPeriod.getDate() - days);
  const startPeriod = new Date(endPeriod);
  startPeriod.setDate(startPeriod.getDate() - 30);

  const activeAtStart = subscriptions.filter((sub) => {
    const start = new Date(sub.subsStartDate);
    const end = new Date(sub.subsEndDate);

    return start <= startPeriod && (end > startPeriod || !sub.subsEndDate);
  });

  const canceledInPeriod = activeAtStart.filter((sub) => {
    if (!sub.subsEndDate) return false;
    const end = new Date(sub.subsEndDate);

    return end >= startPeriod && end <= endPeriod;
  });

  const churnRate =
    activeAtStart.length === 0
      ? 0
      : canceledInPeriod.length / activeAtStart.length;

  return churnRate;
};

export default getChurnRate;
