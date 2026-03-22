import getTimeAgo from "../../utils/getTimeAgo.js";

const generateUsersEvents = (usersData = []) => {
  if (!usersData || usersData.length === 0) {
    return {
      eventsTitle: ["Time", "User", "Email", "Created At"],
      events: [],
    };
  }

  const lastEvents = (eventsData = [], num = 5) =>
    [...eventsData]
      .sort((a, b) => new Date(b.userCreatedAt) - new Date(a.userCreatedAt))
      .slice(0, num)
      .map((event) => {
        const eventDate = new Date(event.userCreatedAt);
        return {
          userId: event.userId,
          userName: event.userName,
          userEmail: event.userEmail,
          eventDate: eventDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          eventTimeAgo: getTimeAgo(eventDate),
        };
      });

  const lastUsers = lastEvents(usersData, 10);
  const lastUsersEvents = {
    eventsTitle: ["Time", "User", "Email", "Created At"],
    events: lastUsers,
  };
  return lastUsersEvents;
};

export default generateUsersEvents;
