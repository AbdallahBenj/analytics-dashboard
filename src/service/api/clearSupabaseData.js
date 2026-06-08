import { supabase } from "../../lib/supabase.js";

import useAuthStore from "../../store/useAuthStore.ts";

import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import { fetchSupabaseTable } from "./fetchSupabaseData.js";

import getTablesToUpdate from "./getTablesToUpdate.js";

import { toCamelCase } from "../utils/toCamelCase.js";

// Clear table
const clearTableData = async (table, isUpdateData = false) => {
  const dataTable = toCamelCase(table);

  const { setClearData } = useSupabaseDataStore.getState();
  if (!isUpdateData) setClearData(dataTable, { loading: true, errors: [] });

  try {
    const { error } = await supabase.from(table).delete().neq("id", 0);

    if (error) {
      console.log(`Delete Error ${table}`, error.message);
      const currentErrors =
        useSupabaseDataStore.getState().clearedData[dataTable].errors;
      setClearData(dataTable, {
        errors: [
          ...currentErrors,
          {
            id: Date.now(),
            label: `${dataTable} Data`,
            message: "Failed to Clear",
          },
        ],
      });

      return error;
    }
    console.log(`Clear Supabase ${table} table`);

    return null;
  } finally {
    await fetchSupabaseTable(dataTable, table);
    if (!isUpdateData) setClearData(dataTable, { loading: false });
  }
};

// Clear all tables
const clearSupabaseData = async () => {
  const isClearEnabled = useSupabaseDataStore.getState().isClearEnabled;
  const isAdmin = useAuthStore.getState().isAdmin;

  if (!isClearEnabled || !isAdmin) return;

  const { setClearLoading, resetClearData } = useSupabaseDataStore.getState();

  resetClearData();
  setClearLoading(true);

  try {
    const tablesToUpdate = getTablesToUpdate();

    for (const { tableName } of tablesToUpdate) {
      const error = await clearTableData(tableName);

      if (error) throw error;
    }
  } catch (error) {
    console.error("Clear Supabase Error", error.message);
  } finally {
    setClearLoading(false);
  }
};

export { clearSupabaseData, clearTableData };
