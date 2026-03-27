import DashboardMiniCards from "../features/dashboard/components/DashboardMiniCards.jsx";
import DashboardRevenueChart from "../features/dashboard/components/DashboardRevenueChart.jsx";
import DashboardPlansPieChart from "../features/dashboard/components/DashboardPlansPieChart.jsx";
import DashboardRecentActivity from "../features/dashboard/components/DashboardRecentActivity.jsx";

const DashboardPage = () => {
  return (
    <section
      className="rounded-lg
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      {/* Your content */}
      <DashboardMiniCards />
      <DashboardRevenueChart />
      <DashboardPlansPieChart />
      <DashboardRecentActivity />
    </section>
  );
};

export default DashboardPage;
