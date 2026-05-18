import { users, subscriptions, payments } from "../mock/generateData.js";

import generateUsersEvents from "./generateUsersEvents.js";
import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const limit = 5;
const usersEvents = generateUsersEvents(users, limit);
const subscriptionsEvents = generateSubscriptionsEvents(subscriptions, limit);
const paymentsEvents = generatePaymentsEvents(payments, limit);

export { usersEvents, subscriptionsEvents, paymentsEvents };
