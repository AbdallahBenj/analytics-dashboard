import generateTimeLine from "./generateTimeLine.js";
import generateUsers from "./generateUsers.js";
import generateSubscriptions from "./generateSubscriptions.js";
import generatePayments from "./generatePayments.js";

const timeData = generateTimeLine(180);
const usersData = generateUsers(timeData);
const subscriptionsData = generateSubscriptions(usersData);
const paymentsData = generatePayments(subscriptionsData);

export { timeData, usersData, subscriptionsData, paymentsData };
