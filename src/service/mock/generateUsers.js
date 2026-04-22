import usersNames from "../../data/usersNames";
import countries from "../../data/countries";
import convertToDynamicTime from "../utils/convertToDynamicTime.js";

const generateUsers = (timeline = [], min = 1, max = 5) => {
  let id = 1;

  const users = timeline.flatMap((dateObj, i) => {
    // --- Growth logic for users over time
    const trend = Math.log(i + 1) * 2;
    const growthFactor = Math.random() * min;
    const noisyFactor = (Math.random() - 0.5) * 2;
    const totalDailyUsers = Math.max(
      1,
      Math.floor(min + trend + growthFactor + noisyFactor),
    );

    // Dynamic max users
    const dynamicMax = max + Math.floor(i * 0.1);

    return Array.from({ length: Math.min(totalDailyUsers, dynamicMax) }, () => {
      const userNameIndex = Math.floor(Math.random() * usersNames.length);
      const countryIndex = Math.floor(Math.random() * countries.length);

      // Date generation for each day
      const baseDate = new Date(dateObj.date);

      // Dynamic time for each date
      const userRandomCreatedAt = convertToDynamicTime(baseDate);

      const domains = ["gmail.com", "yahoo.com", "outlook.com"];
      const firstName = usersNames[userNameIndex]
        .toLowerCase()
        .trim()
        .split(" ")[0];

      const user = {
        userId: `u_${id}`,
        userName: `${usersNames[userNameIndex]}`,
        userCountry: countries[countryIndex],
        userEmail: `${firstName}.${id}@${domains[Math.floor(Math.random() * domains.length)]}`,
        userCreatedAt: userRandomCreatedAt.toISOString(),
      };

      // increment ID
      id++;
      return user;
    });
  });

  return users;
};

export default generateUsers;
