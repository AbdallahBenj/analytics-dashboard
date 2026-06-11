import useDashboardData from "../hooks/useDashboardData.js";
import useReloadDashboardData from "../hooks/useReloadDashboardData.js";

// test
import useSupabaseDataStore from "../store/useSupabaseDataStore.js";
import useMockDataStore from "../store/useMockDataStore.js";

const useErrorsDialog = () => {
  const reloadDashboardData = useReloadDashboardData();
  const { dashboardData } = useDashboardData();
  const { isErrors, errors } = dashboardData;

  // console.log("dashboardData", dashboardData);

  // test start
  const mockData = useMockDataStore((state) => state.fetchedData);
  const fetchedData = useSupabaseDataStore((state) => state.fetchedData);
  const clearedData = useSupabaseDataStore((state) => state.clearedData);
  const upsertData = useSupabaseDataStore((state) => state.upsertData);
  const syncData = useSupabaseDataStore((state) => state.syncData);

  const getDataErrors = (
    data,
    dataName = "Data",
    message = "Failed to Load",
  ) => {
    const dataErrors = Object.values(data).flatMap((obj) => obj.errors);
    const isErrors = dataErrors.length >= 1;
    const errorsResult = isErrors
      ? [
          {
            id: crypto.randomUUID(),
            label: `${dataName}`,
            message: message,
          },
        ]
      : [];
    // console.table(`${dataName} Errors`, dataErrors, isErrors);
    return dataErrors;
  };

  const mockDataErrors = getDataErrors(mockData, "MockData");
  const fetchedDataErrors = getDataErrors(fetchedData, "Supabase Data");
  const clearedDataErrors = getDataErrors(
    clearedData,
    "Supabase Data",
    "Failed to Clear",
  );
  const upsertDataErrors = getDataErrors(
    upsertData,
    "Supabase Data",
    "Failed to Upsert",
  );
  const syncDataErrors = getDataErrors(
    syncData,
    "Supabase Data",
    "Failed to Synchronize",
  );

  // test end

  const errorsDialogConfig = {
    isErrors,
    errors,
    reloadDashboardData,
  };

  return errorsDialogConfig;
};

export default useErrorsDialog;
