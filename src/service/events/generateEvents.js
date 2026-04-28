import { usersData, subsData, paymentsData } from "../mock/generateData.ts";

import generateSubscriptionsEvents from "./generateSubscriptionsEvents.js";
import generateUsersEvents from "./generateUsersEvents.ts";
import generatePaymentsEvents from "./generatePaymentsEvents.js";

const limit = 10;
const usersEvents = generateUsersEvents(usersData, limit);
const subsEvents = generateSubscriptionsEvents(subsData, limit);
const paymentsEvents = generatePaymentsEvents(paymentsData, limit);

export { usersEvents, subsEvents, paymentsEvents };
