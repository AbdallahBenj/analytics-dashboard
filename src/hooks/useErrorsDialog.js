import useDashboardData from "../hooks/useDashboardData.js";
import useReloadDashboardData from "../hooks/useReloadDashboardData.js";

// test
import useSupabaseDataStore from "../store/useSupabaseDataStore.js";

const useErrorsDialog = () => {
  const reloadDashboardData = useReloadDashboardData();
  const { dashboardData } = useDashboardData();
  const { isErrors, errors } = dashboardData;

  // console.log("dashboardData", dashboardData);

  // test start
  const clearedData = useSupabaseDataStore((state) => state.clearedData);
  const upsertData = useSupabaseDataStore((state) => state.upsertData);
  // const syncData = useSupabaseDataStore((state) => state.syncData);

  const clearErrors = Object.values(clearedData).flatMap((obj) => obj.errors);
  const isClearErrors = clearErrors.length >= 1;
  // console.table("clearedDataErrors", clearErrors, isClearErrors);

  const upsertErrors = Object.values(upsertData).flatMap((obj) => obj.errors);
  const isUpsertErrors = upsertErrors.length >= 1;
  // console.log("upsertDataErrors", upsertErrors, isUpsertErrors);

  // const syncErrors = Object.values(syncData).flatMap((obj) => obj.errors);
  // const isSyncErrors = syncErrors.length >= 1;
  // console.log("SyncDataErrors", syncErrors, isSyncErrors);
  // test end

  const errorsDialogConfig = {
    isErrors,
    errors,
    reloadDashboardData,
  };

  return errorsDialogConfig;
};

export default useErrorsDialog;
