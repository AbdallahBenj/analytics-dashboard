import getTimeAgo from "../../utils/getTimeAgo.js";

import type { User } from "../../types/dataTypes.js";
import type {
  EventsTitle,
  Events,
  UsersEvents,
} from "../../types/eventsTypes.js";

const generateUsersEvents = (
  usersData: User[] = [],
  limit: number = 10,
): UsersEvents => {
  const eventsTitle: EventsTitle[] = ["Time", "User", "Email", "Created At"];

  if (!usersData || usersData.length === 0) {
    return { eventsTitle, events: [] };
  }

  const lastEvents = (eventsData: User[] = []) =>
    [...eventsData]
      .map((user) => {
        const eventDate = user.userCreatedAt
          ? new Date(user.userCreatedAt)
          : null;
        return { ...user, eventDateObj: eventDate };
      })
      .sort(
        (a, b) =>
          (b.eventDateObj?.getTime() || 0) - (a.eventDateObj?.getTime() || 0),
      )
      .slice(0, limit)
      .map(({ eventDateObj, userId, userName, userEmail }) => ({
        userId,
        userName,
        userEmail,
        eventDate: eventDateObj
          ? eventDateObj.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "N/A",
        eventTimeAgo: eventDateObj ? getTimeAgo(eventDateObj) : "N/A",
      }));

  const usersEvents = { eventsTitle, events: lastEvents(usersData) };

  return usersEvents;
};

export default generateUsersEvents;
