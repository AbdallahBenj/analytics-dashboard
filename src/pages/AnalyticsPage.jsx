import ComingSoon from "../components/ComingSoon.tsx";

import AnalyticsRevenueByPlanChart from "../features/analytics/components/AnalyticsRevenueByPlanChart.tsx";

// import Errors Dialog

import useDashboardData from "../hooks/useDashboardData.js";
import ErrorsDialog from "../components/ErrorsDialog.tsx";
import LoginDialog from "../components/LoginDialog.tsx";

const AnalyticsPage = () => {
  // Get DashboardData
  const { dashboardData } = useDashboardData();
  const { isErrors } = dashboardData;

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
