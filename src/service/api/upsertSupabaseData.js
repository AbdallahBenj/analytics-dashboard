import { supabase } from "../../lib/supabase.js";
import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
import getTablesToUpdate from "./getTablesToUpdate.js";

import { fetchSupabaseTable } from "./fetchSupabaseData.js";

import useAuthStore from "../../store/useAuthStore.ts";

import { toCamelCase } from "../utils/toCamelCase.js";

// Upsert table part to Supabase
// const upsertChunkData = async (tableData, table) => {
//   const { error } = await supabase.from(table).upsert(tableData);
//   // .select("*");

//   if (error) throw error;
// };

// Upsert table to Supabase
const upsertTableData = async (tableData, table) => {
  const dataTable = toCamelCase(table);

  console.log(`START UPSERT ${table}`);

  const { setUpsertData } = useSupabaseDataStore.getState();
  setUpsertData(dataTable, { loading: true, errors: [] });

  try {
    for (let i = 0; i < tableData.length; i += 500) {
      const dataPart = tableData.slice(i, i + 500);
      // await upsertChunkData(dataPart, table);
      const { error } = await supabase.from(table).upsert(dataPart);
      if (error) {
        console.log(`Delete Error ${table}`, error);
        const currentErrors =
          useSupabaseDataStore.getState().clearedData[dataTable].errors || [];
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
    setUpsertData(dataTable, { loading: false });
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

  console.log("UPSERT COMPLETED");
};

export default upsertSupabaseData;
