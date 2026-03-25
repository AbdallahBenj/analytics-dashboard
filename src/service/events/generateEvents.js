import {
  usersData,
  subscriptionsData,
  paymentsData,
} from "../mock/generateData.js";

import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generateUsersEvents from "./generateUsersEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const limit = 10;

const lastUsersEvents = generateUsersEvents(usersData, limit);
const lastSubsEvents = generateSubscriptionsEvents(subscriptionsData, limit);
const lastPaymentsEvents = generatePaymentsEvents(paymentsData, limit);

export { lastSubsEvents, lastUsersEvents, lastPaymentsEvents };
