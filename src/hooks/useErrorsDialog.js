import useDashboardData from "../hooks/useDashboardData.js";
import useReloadDashboardData from "../hooks/useReloadDashboardData.js";

// test
import useSupabaseDataStore from "../store/useSupabaseDataStore.js";
// import useMockDataStore from "../store/useMockDataStore.js";

import { clearSupabaseData } from "../service/supabase/clearSupabaseData.js";
import { upsertSupabaseData } from "../service/supabase/upsertSupabaseData.js";
import syncSupabaseData from "../service/supabase/syncSupabaseData.js";

import useErrorsDialogStore from "../store/useErrorsDialogStore.js";

const useErrorsDialog = () => {
  const reloadDashboardData = useReloadDashboardData();
  const { dashboardData } = useDashboardData();
  const { errors } = dashboardData;

  // test start
  // const mockData = useMockDataStore((state) => state.fetchedData);
  // const fetchedData = useSupabaseDataStore((state) => state.fetchedData);
  const clearedData = useSupabaseDataStore((state) => state.clearedData);
  const upsertData = useSupabaseDataStore((state) => state.upsertData);
  const syncData = useSupabaseDataStore((state) => state.syncData);

  const dialogType = useErrorsDialogStore((state) => state.dialogType);
  // console.log("dialogType", dialogType);

  const getDataErrors = (data) => {
    const dataErrors = Object.values(data).flatMap((obj) => obj.errors);
    return dataErrors;
  };

  const clearedDataErrors = getDataErrors(clearedData);
  const upsertDataErrors = getDataErrors(upsertData);
  const syncDataErrors = getDataErrors(syncData);

  const errorsDialogResults = {
    dashboardData: {
      errors,
      retry: reloadDashboardData,
    },
    clearedData: {
      errors: clearedDataErrors,
      retry: clearSupabaseData,
    },
    upsertData: {
      errors: upsertDataErrors,
      retry: upsertSupabaseData,
    },
    syncData: {
      errors: syncDataErrors,
      retry: syncSupabaseData,
    },
  };

  const errorsDialogConfig = errorsDialogResults?.[dialogType];

  // console.log("errorsDialogConfig", errorsDialogConfig);
  // console.log("dashboardData", dashboardData);

  return errorsDialogConfig;
};

export default useErrorsDialog;
