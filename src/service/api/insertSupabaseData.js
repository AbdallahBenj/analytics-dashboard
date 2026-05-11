import { supabase } from "../../lib/supabase.js";

import {
  timeData,
  usersData,
  subsData,
  paymentsData,
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
  await addDataType("timeline", timeData);
  await addDataType("users", usersData);
  await addDataType("subscriptions", subsData);
  await addDataType("payments", paymentsData);
};

export default insertSupabaseData;
