import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";
// import { clearSupabaseData } from "./clearSupabaseData.js";
// import { upsertSupabaseData } from "./upsertSupabaseData.js";

// test start Sync loading states

import useAuthStore from "../../store/useAuthStore.ts";
import getTablesToUpdate from "./getTablesToUpdate.js";
import { clearTableData } from "./clearSupabaseData.js";
import { upsertTableData } from "./upsertSupabaseData.js";

// test end Sync loading states

const syncSupabaseData = async () => {
  const { isClearEnabled } = useSupabaseDataStore.getState().clear;
  const { isUpsertEnabled } = useSupabaseDataStore.getState().upsert;
  const isUpdateDataEnabled = isClearEnabled || isUpsertEnabled;
  const isAdmin = useAuthStore.getState().isAdmin;

  if (!isUpdateDataEnabled || !isAdmin) return; // need to moveUp

  // test start Sync loading states
  const { setSyncData } = useSupabaseDataStore.getState();
  const tablesToUpdate = getTablesToUpdate();

  for (const { tableData, dataName, tableName } of tablesToUpdate) {
    // Clear Supabase Table
    try {
      setSyncData(dataName, { loading: true, errors: [] });
      const error = await clearTableData(tableName, true);

      if (error) throw error;
    } catch (error) {
      console.error("Clear Supabase Error", error.message);
      // setClearError(error.message);
      const currentErrors =
        useSupabaseDataStore.getState().syncData[dataName].errors || [];
      setSyncData(dataName, {
        errors: [
          ...currentErrors,
          {
            id: Date.now(),
            label: `${dataName} Data`,
            message: "Failed to Clear",
          },
        ],
      });
      continue;
    }

    // Upsert Supabase Table

    try {
      await upsertTableData(tableData, tableName, true);
    } catch (error) {
      console.log("Upsert Supabase Error", error.message);
      const currentErrors =
        useSupabaseDataStore.getState().syncData[dataName].errors || [];
      setSyncData(dataName, {
        errors: [
          ...currentErrors,
          {
            id: Date.now(),
            label: `${dataName} Data`,
            message: "Failed to Upsert",
          },
        ],
      });
    } finally {
      setSyncData(dataName, { loading: false });
    }
  }

  // test end Sync loading states

  // await clearSupabaseData();
  // await upsertSupabaseData();

  console.log("SYNCHRONIZING COMPLETED");
};

export default syncSupabaseData;
