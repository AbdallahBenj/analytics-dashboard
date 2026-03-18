import {
  usersData,
  subscriptionsData,
  paymentsData,
} from "../service/generateData.js";

import generateSubsEvents from "../service/generateSubsEvents.js";
import generateUsersEvents from "../service/generateUsersEvents.js";
import generatePaymentsEvents from "../service/generatePaymentsEvents.js";

const lastUsersEvents = generateUsersEvents(usersData);
const lastSubsEvents = generateSubsEvents(subscriptionsData);
const lastPaymentsEvents = generatePaymentsEvents(paymentsData);

export { lastSubsEvents, lastUsersEvents, lastPaymentsEvents };
