import getTimeAgo from "../../utils/getTimeAgo.js";

const generateUsersEvents = (usersData = [], limit = 10) => {
  const eventsTitle = ["Time", "User", "Email", "Created At"];

  if (!usersData || usersData.length === 0) {
    return { eventsTitle, events: [] };
  }

  const lastEvents = (eventsData = []) =>
    [...eventsData]
      .map((user) => {
        const eventDate = user.userCreatedAt
          ? new Date(user.userCreatedAt)
          : null;
        return { ...user, eventDateObj: eventDate };
      })
      .sort((a, b) => (b.eventDateObj || 0) - (a.eventDateObj || 0))
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

  const lastUsersEvents = { eventsTitle, events: lastEvents(usersData) };
  return lastUsersEvents;
};

export default generateUsersEvents;
