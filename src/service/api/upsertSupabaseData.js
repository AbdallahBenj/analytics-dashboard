import { supabase } from "../../lib/supabase.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import getTablesToUpdate from "./getTablesToUpdate.js";

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
  }

  console.log(`END UPSERT ${table}`);
};

// Upsert all tables to Supabase

const upsertSupabaseData = async () => {
  const { isUpsertEnabled } = useSupabaseDataStore.getState().upsert;

  if (!isUpsertEnabled) return;

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

  console.log("UPSERT COMPLETED");
};

export default upsertSupabaseData;
