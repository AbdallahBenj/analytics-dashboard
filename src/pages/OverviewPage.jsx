import OverviewMiniCards from "../features/overview/components/OverviewMiniCards.tsx";
import OverviewRevenueChart from "../features/overview/components/OverviewRevenueChart.tsx";
import OverviewPlansPieChart from "../features/overview/components/OverviewPlansPieChart.tsx";
import OverviewActivityTable from "../features/overview/components/OverviewActivityTable.tsx";

// import Errors Dialog
import useDashboardData from "../hooks/useDashboardData.js";
import ErrorsDialog from "../components/ErrorsDialog.tsx";
import LoginDialog from "../components/LoginDialog.tsx";

const OverviewPage = () => {
  // Get DashboardData
  const { dashboardData } = useDashboardData();
  const { isErrors } = dashboardData;

  return (
    <section
      className="rounded-lg
      grid grid-cols-4 gap-4"
    >
      {/* Errors Dialog */}
      {isErrors && <ErrorsDialog />}

      {/* The content */}
      <OverviewMiniCards />
      <OverviewRevenueChart />
      <OverviewPlansPieChart />
      <OverviewActivityTable />
    </section>
  );
};

export default OverviewPage;
