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
      sub.subsStatus === "active" ? sub.subsStartDate : sub.subsEndDate;
    return eventDate ? new Date(eventDate) : null;
  };

  const getLatestSubsEvents = (eventsData: Subscription[] = []) =>
    [...eventsData]
      .map((sub) => ({ ...sub, eventDateObj: getEventDate(sub) }))
      .sort(
        (a, b) =>
          (b.eventDateObj?.getTime() || 0) - (a.eventDateObj?.getTime() || 0),
      )
      .map(
        ({ eventDateObj: date, subsId, userName, subsPlan, subsStatus }) => ({
          subsId,
          userName,
          subsPlan,
          subsStatus,
          eventDate: date
            ? date.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "N/A",
          eventTimeAgo: date ? getTimeAgo(date) : "N/A",
        }),
      );

  const subsEvents = getLatestSubsEvents(subsData);

  return subsEvents;
};

export default generateSubscriptionsEvents;
