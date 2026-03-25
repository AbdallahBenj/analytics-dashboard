import getTimeAgo from "../../utils/getTimeAgo.js";

const generateSubscriptionsEvents = (subsData = [], limit = 10) => {
  const eventsTitle = ["Time", "User", "Date", "Plan", "Status"];
  if (!subsData || subsData.length === 0) {
    return { eventsTitle, events: [] };
  }

  const getEventDate = (sub) => {
    const eventDate =
      sub.subsStatus === "active" ? sub.subsStartDate : sub.subsEndDate;
    return eventDate ? new Date(eventDate) : null;
  };

  const lastEvents = (eventsData = []) =>
    [...eventsData]
      .map((sub) => ({ ...sub, eventDateObj: getEventDate(sub) }))
      .sort((a, b) => (b.eventDateObj || 0) - (a.eventDateObj || 0))
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

  const lastSubsEvents = { eventsTitle, events: lastEvents(subsData) };
  return lastSubsEvents;
};

export default generateSubscriptionsEvents;
