import generateTimeLine from "./generateTimeLine.js";
import generateUsers from "./generateUsers.js";
import generateSubscriptions from "./generateSubscriptions.js";
import generatePayments from "./generatePayments.js";

const timeData = generateTimeLine(180);
const usersData = generateUsers(timeData);
const subsData = generateSubscriptions(usersData);
const paymentsData = generatePayments(subsData);

export { timeData, usersData, subsData, paymentsData };
