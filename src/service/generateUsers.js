import usersNames from "./usersNames";

const generateUsers = (timeline = [], min = 1, max = 5) => {
  let id = 1;

  const users = timeline.flatMap((dateObj, i) => {
    const trend = i * 0.3;
    const growlyFactor = Math.random() * min;
    const noisyFactor = (Math.random() - 0.5) * 2;
    const totalDailyUsers = Math.max(
      1,
      Math.floor(min + trend + growlyFactor + noisyFactor),
    );

    return Array.from({ length: Math.min(totalDailyUsers, max) }, () => {
      const userNameIndex = Math.floor(Math.random() * usersNames.length);
      const user = {
        id: `u_${id}`,
        name: `${usersNames[userNameIndex]}_${id}`,
        email: `${usersNames[userNameIndex].split(" ").join("-")}_${id}@email.com`,
        createdAt: dateObj.date,
      };
      id++;
      return user;
    });
  });

  return users;
};

export default generateUsers;
