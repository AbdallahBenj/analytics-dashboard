import ComingSoon from "../components/ComingSoon.tsx";
import SourcesDataSettings from "../features/setting/components/SourcesDataSettings.jsx";
import SupabaseDataSettings from "../features/setting/components/SupabaseDataSettings.jsx";
import GenerateMockDataSetting from "../features/setting/components/GenerateMockDataSetting.jsx";

// import Errors Dialog
// import useDashboardData from "../hooks/useDashboardData.js";
import ErrorsDialog from "../components/ErrorsDialog.tsx";
import LoginDialog from "../components/LoginDialog.tsx";

const SettingsPage = () => {
  // Get DashboardData
  // const { dashboardData } = useDashboardData();
  // const { isErrors } = dashboardData;

  return (
    <section
      className="rounded-lg h-full
      grid grid-cols-4 gap-4"
    >
      {/* Errors Dialog */}
      {/* {isErrors && <ErrorsDialog />} */}

      <SourcesDataSettings />
      <GenerateMockDataSetting />
      <SupabaseDataSettings />
      {/* <ComingSoon /> */}
    </section>
  );
};

export default SettingsPage;
