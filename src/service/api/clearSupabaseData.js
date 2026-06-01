import { supabase } from "../../lib/supabase.js";

import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import getTablesToUpdate from "./getTablesToUpdate.js";

// Clear table
const clearTableData = async (table) => {
  const { error } = await supabase.from(table).delete().neq("id", 0);

  if (error) {
    console.error(`Delete Error (${table})`, error);
  }
  return error;
};

// Clear all tables
const clearSupabaseData = async () => {
  const { isClearEnabled } = useSupabaseDataStore.getState().clear;

  if (!isClearEnabled) return;

  const { setClearLoading, setClearError } = useSupabaseDataStore.getState();
  setClearLoading(true);
  setClearError(null);

  try {
    const tablesToUpdate = getTablesToUpdate();

    for (const table of tablesToUpdate) {
      const error = await clearTableData(table);

      if (error) throw error;
    }
  } catch (error) {
    console.log("Clear Supabase Error", error.message);
    setClearError(error.message);
  } finally {
    setClearLoading(false);
  }
};

export default clearSupabaseData;
