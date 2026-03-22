import {
  usersData,
  subscriptionsData,
  paymentsData,
} from "../mock/generateData.js";

import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generateUsersEvents from "./generateUsersEvents.js";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const lastUsersEvents = generateUsersEvents(usersData);
const lastSubsEvents = generateSubscriptionsEvents(subscriptionsData);
const lastPaymentsEvents = generatePaymentsEvents(paymentsData);

export { lastSubsEvents, lastUsersEvents, lastPaymentsEvents };
