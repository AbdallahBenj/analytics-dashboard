import getTimeAgo from "../../utils/getTimeAgo.js";

import type { User } from "../../types/dataTypes.js";
import type { UsersEvents } from "../../types/eventsTypes.js";

const generateUsersEvents = (usersData: User[]): UsersEvents[] => {
  if (!usersData || usersData.length === 0) {
    return [];
  }

  const getLatestUsersEvents = (eventsData: User[] = []) =>
    [...eventsData]
      .map((user) => {
        const eventDate = user.userCreatedAt
          ? new Date(user.userCreatedAt)
          : null;

        const isValidDate = eventDate && !Number.isNaN(eventDate?.getTime());

        return { ...user, eventDateObj: isValidDate ? eventDate : null };
      })
      .sort(
        (a, b) =>
          (b.eventDateObj?.getTime() || 0) - (a.eventDateObj?.getTime() || 0),
      )
      .map(({ eventDateObj, userId, userName, userEmail }) => ({
        userId,
        userName,
        userEmail,
        eventDate: eventDateObj ? eventDateObj.toISOString() : null,
      }));

  const usersEvents = getLatestUsersEvents(usersData);

  return usersEvents;
};

export default generateUsersEvents;
