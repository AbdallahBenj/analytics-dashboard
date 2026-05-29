import generateTimeline from "./generateTimeline.js";
import generateUsers from "./generateUsers.js";
import generateSubscriptions from "./generateSubscriptions.js";
import generatePayments from "./generatePayments.js";

import generateUsersEvents from "./generateUsersEvents.js";
import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const generateMockData = () => {
  const timeline = generateTimeline(366);
  const users = generateUsers(timeline);
  const subscriptions = generateSubscriptions(users);
  const payments = generatePayments(subscriptions);

  const usersEvents = generateUsersEvents(users);
  const subscriptionsEvents = generateSubscriptionsEvents(subscriptions);
  const paymentsEvents = generatePaymentsEvents(payments);

  // console.log("generateMockData");

  return {
    timeline,
    users,
    subscriptions,
    payments,
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  };
};

export default generateMockData;
