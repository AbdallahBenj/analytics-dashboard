import { supabase } from "../../lib/supabase.js";

import {
  timeline,
  users,
  subscriptions,
  payments,
} from "../mock/generateData.js";

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
  console.log("START ALLData INSERT");
  await addDataType(timeline, "timeline");
  await addDataType(users, "users");
  await addDataType(subscriptions, "subscriptions");
  await addDataType(payments, "payments");
  console.log("END ALLData INSERT");
};

export default insertSupabaseData;
