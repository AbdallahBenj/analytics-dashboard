import { supabase } from "../../lib/supabase.js";

import {
  timeline,
  users,
  subscriptions,
  payments,
} from "../mock/generateData.js";

const isEnableInsertData = false;

const insertDataType = async (table, dataType) => {
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

const addDataType = async (table, dataType) => {
  console.log("START INSERT");

  for (let i = 0; i < dataType.length; i += 500) {
    let dataPart = dataType.slice(i, i + 500);
    console.log("dataPart", `${i} - ${i + dataPart.length}`);
    await insertDataType(table, dataPart);
  }

  console.log("END INSERT");
};

const insertSupabaseData = async () => {
  if (!isEnableInsertData) return;
  await addDataType("timeline", timeline);
  await addDataType("users", users);
  await addDataType("subscriptions", subscriptions);
  await addDataType("payments", payments);
};

export default insertSupabaseData;
