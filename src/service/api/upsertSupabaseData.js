import { supabase } from "../../lib/supabase.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import getTablesToUpdate from "./getTablesToUpdate.js";

import fetchSupabaseData from "./fetchSupabaseData.js";

import useAuthStore from "../../store/useAuthStore.ts";

// Upsert table part to Supabase
const upsertChunkData = async (tableData, table) => {
  const { error } = await supabase.from(table).upsert(tableData);
  // .select("*");

  if (error) throw error;
};

// Upsert table to Supabase
const upsertTableData = async (tableData, table) => {
  console.log(`START UPSERT ${table}`);

  for (let i = 0; i < tableData.length; i += 500) {
    const dataPart = tableData.slice(i, i + 500);
    await upsertChunkData(dataPart, table);
    console.log("Upsert", `${table}:`, `${i} - ${i + 500}`);
  }

  console.log(`END UPSERT ${table}`);
};

// Upsert all tables to Supabase

const upsertSupabaseData = async () => {
  const { isUpsertEnabled } = useSupabaseDataStore.getState().upsert;
  const isAdmin = useAuthStore.getState().isAdmin;

  if (!isUpsertEnabled || !isAdmin) return;

  const tablesToUpdate = getTablesToUpdate();
  const { setUpsertLoading, setUpsertError } = useSupabaseDataStore.getState();
  setUpsertLoading(true);
  setUpsertError(null);

  try {
    for (const { dataTable, table } of tablesToUpdate) {
      await upsertTableData(dataTable, table);
    }
  } catch (error) {
    console.log("Upsert Supabase Error", error.message);
    setUpsertError(error.message);
  } finally {
    setUpsertLoading(false);
  }

  fetchSupabaseData();
  console.log("UPSERT COMPLETED");
};

export default upsertSupabaseData;
