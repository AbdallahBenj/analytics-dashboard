import getTimeAgo from "../utils/getTimeAgo.js";

const generateUsersEvents = (usersData = []) => {
  console.log("usersData:", usersData);

  const getUsersEventDate = (user) => new Date(user.createdAt);

  const lastEvents = (eventsData = [], getEventDate, num = 5) =>
    [...eventsData]
      .map((event) => ({
        id: event.userId,
        span2: event.userName,
        span3: event.userEmail,
        span4: new Date(event.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        span1: getTimeAgo(getEventDate(event)),
      }))
      .sort((a, b) => getEventDate(b) - getEventDate(a))
      .slice(0, num);

  const lastUsers = lastEvents(usersData, getUsersEventDate, 10);
  const lastUsersEvents = {
    eventsTitle: ["Time", "User", "Email", "Created At"],
    events: lastUsers,
  };

  console.log("lastUsersEvents:", lastUsersEvents);
  console.log("timeAgo:", getTimeAgo(usersData[0].createdAt));

  return lastUsersEvents;
};

export default generateUsersEvents;
