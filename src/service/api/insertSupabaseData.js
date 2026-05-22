import { supabase } from "../../lib/supabase.js";
import convertKeysToSnakeCase from "../utils/toSnakeCase.js";

import {
  timeline,
  users,
  subscriptions,
  payments,
} from "../mock/generateData.js";

import {
  usersEvents,
  subscriptionsEvents,
  paymentsEvents,
} from "../events/generateEvents.js";

const isEnableInsertData = false;

const insertDataType = async (dataType, table) => {
  const { data, error } = await supabase
    .from(table)
    .upsert(dataType)
    .select("*");

  if (error) {
    console.log("error", error);
    return;
  }
  console.log("success", data);
  return data;
};

const addDataType = async (dataType, table) => {
  console.log("START dataPart INSERT");

  for (let i = 0; i < dataType.length; i += 500) {
    let dataPart = dataType.slice(i, i + 500);
    console.log("dataPart", `${i} - ${i + dataPart.length}`);
    await insertDataType(dataPart, table);
  }

  console.log("END dataPart INSERT");
};

const insertSupabaseData = async () => {
  if (!isEnableInsertData) return;

  // Convert data objects keys to snakeCase
  const formattedUsers = users.map(convertKeysToSnakeCase);
  const formattedSubscriptions = subscriptions.map(convertKeysToSnakeCase);
  const formattedPayments = payments.map(convertKeysToSnakeCase);
  const formattedUsersEvents = usersEvents.map(convertKeysToSnakeCase);
  const formattedSubscriptionsEvents = subscriptionsEvents.map(
    convertKeysToSnakeCase,
  );
  const formattedPaymentsEvents = paymentsEvents.map(convertKeysToSnakeCase);

  console.log("START ALLData INSERT");

  await addDataType(timeline, "timeline");
  await addDataType(formattedUsers, "users");
  await addDataType(formattedSubscriptions, "subscriptions");
  await addDataType(formattedPayments, "payments");

  await addDataType(formattedUsersEvents, "users_events");
  await addDataType(formattedSubscriptionsEvents, "subscriptions_events");
  await addDataType(formattedPaymentsEvents, "payments_events");

  console.log("END ALLData INSERT");
};

export default insertSupabaseData;
