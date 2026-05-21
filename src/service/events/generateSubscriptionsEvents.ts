import getTimeAgo from "../../utils/getTimeAgo.js";

import type { Subscription } from "../../types/dataTypes.js";
import type { SubsEvents } from "../../types/eventsTypes.js";

const generateSubscriptionsEvents = (
  subsData: Subscription[] = [],
): SubsEvents[] => {
  if (!subsData || subsData.length === 0) {
    return [];
  }

  const getEventDate = (sub: Subscription): Date | null => {
    const eventDate =
      sub.subscriptionStatus === "active"
        ? new Date(sub.subscriptionStartDate)
        : new Date(sub.subscriptionEndDate);

    const isValidDate = eventDate && !Number.isNaN(eventDate?.getTime());

    return isValidDate ? new Date(eventDate) : null;
  };

  const getLatestSubsEvents = (eventsData: Subscription[] = []) =>
    [...eventsData]
      .map((sub) => ({ ...sub, eventDateObj: getEventDate(sub) }))
      .sort(
        (a, b) =>
          (b.eventDateObj?.getTime() || 0) - (a.eventDateObj?.getTime() || 0),
      )
      .map(
        ({
          eventDateObj: date,
          subsId,
          userName,
          subscriptionPlan,
          subscriptionStatus,
        }) => ({
          subsId,
          userName,
          subscriptionPlan,
          subscriptionStatus,
          eventDate: date ? date.toISOString() : null,
        }),
      );

  const subsEvents = getLatestSubsEvents(subsData);

  return subsEvents;
};

export default generateSubscriptionsEvents;
