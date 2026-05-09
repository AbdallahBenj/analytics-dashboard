import ComingSoon from "../components/ComingSoon.tsx";

import AnalyticsRevenueTrendChart from "../features/analytics/components/AnalyticsRevenueTrendChart";

// import Errors Dialog
import useGlobalFetchedData from "../hooks/useGlobalFetchedData.js";
import ErrorsDialog from "../components/ErrorsDialog.tsx";
import LoginDialog from "../components/LoginDialog.tsx";

const AnalyticsPage = () => {
  // Check  isErrors
  const { globalStatus } = useGlobalFetchedData();
  const { isDataAndEventsErrors } = globalStatus;

  return (
    <section
      className="rounded-lg h-full
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      {/* Errors Dialog */}
      {isDataAndEventsErrors && <ErrorsDialog />}

      {/* The content */}
      <AnalyticsRevenueTrendChart />

      {/* Coming soon content */}
      <ComingSoon />
    </section>
  );
};

export default AnalyticsPage;
