import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";

import useErrorsDialogStore from "../../store/useErrorsDialogStore.js";

import useAuthStore from "../../store/useAuthStore.ts";
import getTablesToUpdate from "./getTablesToUpdate.js";
import { clearTableData } from "./clearSupabaseData.js";
import { upsertTableData } from "./upsertSupabaseData.js";

const testError = false;

const syncSupabaseData = async () => {
  const { isSyncEnabled } = useSupabaseDataStore.getState();
  const isAdmin = useAuthStore.getState().isAdmin;
  if (!isSyncEnabled || !isAdmin) return;

  // set clear Data type Errors
  const { setSyncData } = useSupabaseDataStore.getState();

  const { setSyncLoading, resetSyncData } = useSupabaseDataStore.getState();
  resetSyncData();
  setSyncLoading(true);

  // Switch to syncData type dialog errors
  useErrorsDialogStore.getState().setDialogType("syncData");

  const tablesToUpdate = getTablesToUpdate();

  for (const { tableData, dataName, tableName } of tablesToUpdate) {
    try {
      setSyncData(dataName, { loading: true, errors: [] });

      const clearError = await clearTableData(tableName, true);

      if (clearError) {
        throw clearError;
      }

      const upsertError = await upsertTableData(tableData, tableName, true);

      if (upsertError) {
        throw upsertError;
      }

      if (testError) {
        console.log("Throwing Test Error");

        throw new Error("Test Failed to Sync");
      }
    } catch (error) {
      console.error("Sync Supabase Error", error?.message);
      const currentErrors =
        useSupabaseDataStore.getState().syncData?.[dataName]?.errors || [];
      setSyncData(dataName, {
        errors: [
          ...currentErrors,
          {
            id: crypto.randomUUID(),
            label: `${dataName} (Supabase)`,
            message: error?.message || "Failed to Sync",
          },
        ],
      });
    } finally {
      setSyncData(dataName, { loading: false });
    }
    setSyncLoading(false);
  }
  console.log("SYNCHRONIZING COMPLETED");
};

export default syncSupabaseData;

// ******************************** Old version //

// import useSupabaseDataStore from "../../store/useSupabaseDataStore.js";

// import useAuthStore from "../../store/useAuthStore.ts";
// import getTablesToUpdate from "./getTablesToUpdate.js";
// import { clearTableData } from "./clearSupabaseData.js";
// import { upsertTableData } from "./upsertSupabaseData.js";

// const testError = false;

// const syncSupabaseData = async () => {
//   const { isSyncEnabled } = useSupabaseDataStore.getState();
//   const isAdmin = useAuthStore.getState().isAdmin;

//   if (!isSyncEnabled || !isAdmin) return;

//   const tablesToUpdate = getTablesToUpdate();
//   const { setSyncLoading, resetSyncData } = useSupabaseDataStore.getState();
//   resetSyncData();
//   setSyncLoading(true);

//   const { setSyncData } = useSupabaseDataStore.getState();
//   for (const { tableData, dataName, tableName } of tablesToUpdate) {
//     // Clear Supabase Table
//     try {
//       setSyncData(dataName, { loading: true, errors: [] });
//       const error = await clearTableData(tableName, true);

//       if (error) {
//         throw error;
//       }

//       if (testError) {
//         throw new Error("Test Error");
//       }
//     } catch (error) {
//       console.error("Clear Supabase Error", error?.message);
//       const currentErrors =
//         useSupabaseDataStore.getState().syncData[dataName].errors || [];
//       setSyncData(dataName, {
//         errors: [
//           ...currentErrors,
//           {
//             id: crypto.randomUUID(),
//             label: `${dataName} (Supabase)`,
//             message: "Failed to Clear on Sync",
//           },
//         ],
//       });
//       // continue;
//     }

//     // Upsert Supabase Table

//     try {
//       const error = await upsertTableData(tableData, tableName, true);

//       if (error) {
//         throw error;
//       }

//       if (testError) {
//         throw new Error("Test Error");
//       }
//     } catch (error) {
//       console.log("Upsert Supabase Error", error.message);
//       const currentErrors =
//         useSupabaseDataStore.getState().syncData[dataName].errors || [];
//       setSyncData(dataName, {
//         errors: [
//           ...currentErrors,
//           {
//             id: Date.now(),
//             label: `${dataName} (Supabase)`,
//             message: "Failed to Upsert on Sync",
//           },
//         ],
//       });
//     } finally {
//       setSyncData(dataName, { loading: false });
//     }
//   }
//   setSyncLoading(false);
//   console.log("SYNCHRONIZING COMPLETED");
// };

// export default syncSupabaseData;
