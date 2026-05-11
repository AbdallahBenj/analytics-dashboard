// test fetch users data
// import {
//   timeData,
//   usersData,
//   subsData,
//   paymentsData,
// } from "../mock/generateData.js";

import fetchUsers from "./fetchUsers.js";

// test fetch subscriptions data
import fetchSubscriptions from "./fetchSubscriptions.js";

// test fetch payments data
import fetchPayments from "./fetchPayments.js";

// test fetch timeline data
import fetchTimeline from "./fetchTimeline.js";

const fetchSupabaseData = async () => {
  //test timeline
  await fetchTimeline();
  // console.log("timeData", timeData);

  //test users
  await fetchUsers();
  // console.log("usersData", usersData);

  //test subscriptions
  await fetchSubscriptions();
  // console.log("subsData", subsData);

  //test payments
  await fetchPayments();
  // console.log("paymentsData", paymentsData);
};

export default fetchSupabaseData;
