import { supabase } from "../../lib/supabase.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import getTablesToUpdate from "./getTablesToUpdate.js";

import { fetchSupabaseTable } from "./fetchSupabaseData.js";

import useAuthStore from "../../store/useAuthStore.ts";

import { toCamelCase } from "../utils/toCamelCase.js";

const testError = false;

// Upsert table to Supabase
const upsertTableData = async (tableData, table, isUpdateData = false) => {
  const dataTable = toCamelCase(table);

  console.log(`START UPSERT ${table}`);

  const { setUpsertData } = useSupabaseDataStore.getState();
  if (!isUpdateData) setUpsertData(dataTable, { loading: true, errors: [] });

  try {
    for (let i = 0; i < tableData.length; i += 500) {
      const dataPart = tableData.slice(i, i + 500);
      const { error } = await supabase.from(table).upsert(dataPart);
      if (error || testError) {
        console.log(`Delete Error ${table}`, error?.message);
        const currentErrors =
          useSupabaseDataStore.getState().clearedData[dataTable].errors;
        setUpsertData(dataTable, {
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

      console.log("Upsert", `${table}:`, `${i} - ${i + 500}`);
    }
  } finally {
    await fetchSupabaseTable(dataTable, table);
    if (!isUpdateData) setUpsertData(dataTable, { loading: false });
  }

  console.log(`END UPSERT ${table}`);
};

// Upsert all tables to Supabase

const upsertSupabaseData = async () => {
  const { isUpsertEnabled } = useSupabaseDataStore.getState();
  const isAdmin = useAuthStore.getState().isAdmin;

  if (!isUpsertEnabled || !isAdmin) return;

  const tablesToUpdate = getTablesToUpdate();
  const { setUpsertLoading, resetUpsertData } = useSupabaseDataStore.getState();
  resetUpsertData();
  setUpsertLoading(true);

  try {
    for (const { tableData, tableName } of tablesToUpdate) {
      await upsertTableData(tableData, tableName);
    }
  } catch (error) {
    console.log("Upsert Supabase Error", error.message);
  } finally {
    setUpsertLoading(false);
  }

  console.log("UPSERT COMPLETED");
};

export { upsertSupabaseData, upsertTableData };
