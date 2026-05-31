import { supabase } from "../../lib/supabase.js";
import useMockDataStore from "../../store/useMockDataStore.ts";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";

import convertKeysToSnakeCase from "../utils/toSnakeCase.js";

const { isClearEnabled } = useSupabaseDataStore.getState().clear;
const { isUpsertEnabled } = useSupabaseDataStore.getState().upsert;
const isUpdateDataEnabled = isClearEnabled || isUpsertEnabled;

// const isClearDataEnabled = true;
// const isUpsertDataEnabled = true;
// const isUpdateDataEnabled = isClearDataEnabled || isUpsertDataEnabled;

const clearDataType = async (table) => {
  if (!isClearEnabled) return;
  const { error } = await supabase.from(table).delete().neq("id", 0);

  if (error)
    // console.error("Delete Errors", error);
    return error;
};

const insertChunkData = async (dataType, table) => {
  const { data, error } = await supabase
    .from(table)
    .upsert(dataType)
    .select("*");

  if (error) {
    // console.error("error", error);
    return error;
  }
  console.log("success");
  return data;
};

const insertTableData = async (dataType, table, label = "") => {
  if (!isUpsertEnabled) return;

  console.log(`START INSERT ${label}`);

  for (let i = 0; i < dataType.length; i += 500) {
    let dataPart = dataType.slice(i, i + 500);
    // console.log(`${label}:`, `${i} - ${i + dataPart.length}`);
    await insertChunkData(dataPart, table);
  }

  console.log(`END INSERT ${label}`);
};

const upsertSupabaseData = async () => {
  if (!isUpdateDataEnabled) return;

  const generatedData = useMockDataStore.getState().generatedData;

  const {
    timeline,
    users,
    subscriptions,
    payments,
    usersEvents,
    subscriptionsEvents,
    paymentsEvents,
  } = generatedData;

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

  const { setClearLoading, setClearError } = useSupabaseDataStore.getState();
  setClearLoading(true);

  try {
    for (const item of tablesToUpdate) {
      const error = await clearDataType(item.table);
      if (error) throw error;
    }
  } catch (error) {
    // console.log("Clear Supabase Error", error.message);
    setClearError(error.message);
  } finally {
    setClearLoading(false);
  }

  const { setUpsertLoading, setUpsertError } = useSupabaseDataStore.getState();
  setUpsertLoading(true);

  try {
    for (const item of tablesToUpdate) {
      const error = await insertTableData(
        item.dataTable,
        item.table,
        item.table,
      );
      if (error) throw error;
    }
  } catch (error) {
    // console.log("Upsert Supabase Error", error.message);
    setUpsertError(error.message);
  } finally {
    setUpsertLoading(false);
  }

  console.log("END ALLData INSERT");
};

export default upsertSupabaseData;
