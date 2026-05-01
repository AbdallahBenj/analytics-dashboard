import getTimeAgo from "../../utils/getTimeAgo.js";

import type { Subscription } from "../../types/dataTypes.js";
import type { EventsTitle, SubsEvents } from "../../types/eventsTypes.js";

const generateSubscriptionsEvents = (
  subsData: Subscription[] = [],
  limit: number = 10,
): { eventsTitle: EventsTitle[]; events: SubsEvents[] } => {
  const eventsTitle: EventsTitle[] = ["Time", "User", "Date", "Plan", "Status"];
  if (!subsData || subsData.length === 0) {
    return { eventsTitle, events: [] };
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
      .slice(0, limit)
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

  const subsEvents = {
    eventsTitle,
    events: getLatestSubsEvents(subsData),
  };

  return subsEvents;
};

export default generateSubscriptionsEvents;
