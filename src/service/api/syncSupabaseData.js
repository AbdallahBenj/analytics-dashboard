import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";

import useAuthStore from "../../store/useAuthStore.ts";
import getTablesToUpdate from "./getTablesToUpdate.js";
import { clearTableData } from "./clearSupabaseData.js";
import { upsertTableData } from "./upsertSupabaseData.js";

const syncSupabaseData = async () => {
  const { isSyncEnabled } = useSupabaseDataStore.getState();
  const isAdmin = useAuthStore.getState().isAdmin;

  if (!isSyncEnabled || !isAdmin) return;

  const tablesToUpdate = getTablesToUpdate();
  const { setSyncLoading } = useSupabaseDataStore.getState();
  setSyncLoading(true);

  const { setSyncData } = useSupabaseDataStore.getState();
  for (const { tableData, dataName, tableName } of tablesToUpdate) {
    // Clear Supabase Table
    try {
      setSyncData(dataName, { loading: true, errors: [] });
      const error = await clearTableData(tableName, true);

      if (error) throw error;
    } catch (error) {
      console.error("Clear Supabase Error", error.message);
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
  setSyncLoading(false);
  console.log("SYNCHRONIZING COMPLETED");
};

export default syncSupabaseData;
