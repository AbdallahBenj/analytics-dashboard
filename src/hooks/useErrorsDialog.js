// import useDashboardData from "../hooks/useDashboardData.js";
import useReloadDashboardData from "../hooks/useReloadDashboardData.js";

// test
import useSupabaseDataStore from "../store/useSupabaseDataStore.js";
import useMockDataStore from "../store/useMockDataStore.js";

const useErrorsDialog = () => {
  const reloadDashboardData = useReloadDashboardData();
  // const { dashboardData } = useDashboardData();
  // const { isErrors, errors } = dashboardData;

  // console.log("dashboardData", dashboardData);

  // test start
  const mockData = useMockDataStore((state) => state.fetchedData);
  const fetchedData = useSupabaseDataStore((state) => state.fetchedData);
  const clearedData = useSupabaseDataStore((state) => state.clearedData);
  const upsertData = useSupabaseDataStore((state) => state.upsertData);
  const syncData = useSupabaseDataStore((state) => state.syncData);

  const getDataErrors = (data) => {
    const dataErrors = Object.values(data).flatMap((obj) => obj.errors);
    return dataErrors;
  };

  const mockDataErrors = getDataErrors(mockData);
  const fetchedDataErrors = getDataErrors(fetchedData);
  const clearedDataErrors = getDataErrors(clearedData);
  const upsertDataErrors = getDataErrors(upsertData);
  const syncDataErrors = getDataErrors(syncData);

  const errors = mockDataErrors;
  const isErrors = errors.length >= 1;

  // test end

  const errorsDialogConfig = {
    errors,
    isErrors,
    reloadDashboardData,
  };

  return errorsDialogConfig;
};

export default useErrorsDialog;
