import { supabase } from "../../lib/supabase.js";

import useAuthStore from "../../store/useAuthStore.ts";

import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import { fetchSupabaseTable } from "./fetchSupabaseData.js";

import getTablesToUpdate from "./getTablesToUpdate.js";

import { toCamelCase } from "../utils/toCamelCase.js";

// Clear table
const clearTableData = async (table) => {
  const dataTable = toCamelCase(table);

  const { setClearData } = useSupabaseDataStore.getState();
  setClearData(dataTable, { loading: true, errors: [] });

  try {
    const { error } = await supabase.from(table).delete().neq("id", 0);

    if (error) {
      console.log(`Delete Error ${table}`, error);
      const currentErrors =
        useSupabaseDataStore.getState().clearedData[dataTable].errors || [];
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
    setClearData(dataTable, { loading: false });
  }
};

// Clear all tables
const clearSupabaseData = async () => {
  const { isClearEnabled } = useSupabaseDataStore.getState().clear;
  const isAdmin = useAuthStore.getState().isAdmin;

  if (!isClearEnabled || !isAdmin) return;

  const { setClearLoading, setClearError } = useSupabaseDataStore.getState();

  setClearLoading(true);
  setClearError(null);

  try {
    const tablesToUpdate = getTablesToUpdate();

    for (const table of tablesToUpdate) {
      const error = await clearTableData(table.table);

      if (error) throw error;
    }
  } catch (error) {
    console.error("Clear Supabase Error", error.message);
    setClearError(error.message);
  } finally {
    setClearLoading(false);
  }
};

export default clearSupabaseData;
