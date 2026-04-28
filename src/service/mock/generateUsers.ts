import usersNames from "../../data/usersNames.js";
import countries from "../../data/countries.js";
import convertToDynamicTime from "../utils/convertToDynamicTime.js";

import type { Timeline, User } from "../../types/dataTypes.ts";

const generateUsers = (
  timeline: Timeline[] = [],
  min: number = 1,
  max: number = 5,
): User[] => {
  let id: number = 1;

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
      const firstName = usersNames[userNameIndex]!
        .toLowerCase()
        .trim()
        .split(" ")[0];

      const user: User = {
        userId: `u_${id}`,
        userName: `${usersNames[userNameIndex]}`,
        userCountry: countries[countryIndex]!,
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
