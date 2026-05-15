import generateTimeline from "./generateTimeline.js";
import generateUsers from "./generateUsers.js";
import generateSubscriptions from "./generateSubscriptions.js";
import generatePayments from "./generatePayments.js";

const timeline = generateTimeline(366);
const users = generateUsers(timeline);
const subscriptions = generateSubscriptions(users);
const payments = generatePayments(subscriptions);

export { timeline, users, subscriptions, payments };
