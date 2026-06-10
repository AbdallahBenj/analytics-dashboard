import useDashboardData from "../hooks/useDashboardData.js";
import useReloadDashboardData from "../hooks/useReloadDashboardData.js";

const useErrorsDialog = () => {
  const reloadDashboardData = useReloadDashboardData();
  const { dashboardData } = useDashboardData();
  const { isErrors, errors } = dashboardData;

  const errorsDialogConfig = {
    isErrors,
    errors,
    reloadDashboardData,
  };

  return errorsDialogConfig;
};

export default useErrorsDialog;
