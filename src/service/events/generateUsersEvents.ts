import getTimeAgo from "../../utils/getTimeAgo.js";

import type { User } from "../../types/dataTypes.js";
import type { EventsTitle, UsersEvents } from "../../types/eventsTypes.js";

const generateUsersEvents = (usersData: User[] = []): UsersEvents[] => {
  if (!usersData || usersData.length === 0) {
    return [];
  }

  const getLatestUsersEvents = (eventsData: User[] = []) =>
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

  const usersEvents = getLatestUsersEvents(usersData); // { eventsTitle, events: getLatestUsersEvents(usersData) };

  console.log("usersEvents", usersEvents);

  return usersEvents;
};

export default generateUsersEvents;
