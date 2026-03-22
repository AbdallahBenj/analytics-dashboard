import getTimeAgo from "../../utils/getTimeAgo.js";

const generateSubscriptionsEvents = (subscriptionsData = []) => {
  if (!subscriptionsData || subscriptionsData.length === 0) {
    return {
      eventsTitle: ["Time", "User", "Plan", "Status"],
      events: [],
    };
  }

  const getEventDate = (sub) => {
    const eventDate =
      sub.subsStatus === "active" ? sub.subsStartDate : sub.subsEndDate;
    return new Date(eventDate);
  };

  const lastEvents = (eventsData = [], num = 5) =>
    [...eventsData]
      .sort((a, b) => getEventDate(b) - getEventDate(a))
      .slice(0, num)
      .map((event) => {
        const date = getEventDate(event);
        return {
          subsId: event.subsId,
          userName: event.userName,
          subsPlan: event.subsPlan,
          subsStatus: event.subsStatus,
          eventTimeAgo: getTimeAgo(date),
        };
      });

  const lastSubs = lastEvents(subscriptionsData, 10);
  const lastSubsEvents = {
    eventsTitle: ["Time", "User", "Plan", "Status"],
    events: lastSubs,
  };
  return lastSubsEvents;
};

export default generateSubscriptionsEvents;
