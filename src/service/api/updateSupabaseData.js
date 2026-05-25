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

const isClearDataEnabled = false;
const isUpsertDataEnabled = false;
const isUpdateDataEnabled = isClearDataEnabled || isUpsertDataEnabled;

const clearDataType = async (table) => {
  if (!isClearDataEnabled) return;
  const { error } = await supabase.from(table).delete().neq("id", 0);

  if (error) console.error("Delete Errors", error);
};

const insertChunkData = async (dataType, table) => {
  const { data, error } = await supabase
    .from(table)
    .upsert(dataType)
    .select("*");

  if (error) {
    console.error("error", error);
    return;
  }
  console.log("success");
  return data;
};

const insertTableData = async (dataType, table, label = "") => {
  if (!isUpsertDataEnabled) return;

  console.log(`START INSERT ${label}`);

  for (let i = 0; i < dataType.length; i += 500) {
    let dataPart = dataType.slice(i, i + 500);
    console.log(`${label}:`, `${i} - ${i + dataPart.length}`);
    await insertChunkData(dataPart, table);
  }

  console.log(`END INSERT ${label}`);
};

const updateSupabaseData = async () => {
  if (!isUpdateDataEnabled) return;

  // Convert data objects keys to snakeCase
  const formattedUsers = users.map(convertKeysToSnakeCase);
  const formattedSubscriptions = subscriptions.map(convertKeysToSnakeCase);
  const formattedPayments = payments.map(convertKeysToSnakeCase);
  const formattedUsersEvents = usersEvents.map(convertKeysToSnakeCase);
  const formattedSubscriptionsEvents = subscriptionsEvents.map(
    convertKeysToSnakeCase,
  );
  const formattedPaymentsEvents = paymentsEvents.map(convertKeysToSnakeCase);

  console.log("START INSERT ALLData");

  const tablesToUpdate = [
    { dataTable: timeline, table: "timeline" },
    { dataTable: formattedUsers, table: "users" },
    { dataTable: formattedSubscriptions, table: "subscriptions" },
    { dataTable: formattedPayments, table: "payments" },
    { dataTable: formattedUsersEvents, table: "users_events" },
    { dataTable: formattedSubscriptionsEvents, table: "subscriptions_events" },
    { dataTable: formattedPaymentsEvents, table: "payments_events" },
  ];

  for (const item of tablesToUpdate) {
    await clearDataType(item.table);
  }

  for (const item of tablesToUpdate) {
    await insertTableData(item.dataTable, item.table, item.table);
  }

  console.log("END ALLData INSERT");
};

export default updateSupabaseData;
