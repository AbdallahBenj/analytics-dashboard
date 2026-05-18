import { users, subscriptions, payments } from "../mock/generateData.js";

import generateUsersEvents from "./generateUsersEvents.js";
import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const usersEvents = generateUsersEvents(users);
const subscriptionsEvents = generateSubscriptionsEvents(subscriptions);
const paymentsEvents = generatePaymentsEvents(payments);

export { usersEvents, subscriptionsEvents, paymentsEvents };
