import ComingSoon from "../components/ComingSoon.tsx";

import AnalyticsRevenueByPlanChart from "../features/analytics/components/AnalyticsRevenueByPlanChart.tsx";

// import Errors Dialog
import useGlobalMockData from "../hooks/useGlobalMockData.js";
import ErrorsDialog from "../components/ErrorsDialog.tsx";
import LoginDialog from "../components/LoginDialog.tsx";

const AnalyticsPage = () => {
  // Get mockData
  const { mockData } = useGlobalMockData();
  const { isErrors } = mockData;

  return (
    <section
      className="rounded-lg h-full
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      {/* Errors Dialog */}
      {isErrors && <ErrorsDialog />}

      {/* The content */}
      <AnalyticsRevenueByPlanChart />

      {/* Coming soon content */}
      <ComingSoon />
    </section>
  );
};

export default AnalyticsPage;
