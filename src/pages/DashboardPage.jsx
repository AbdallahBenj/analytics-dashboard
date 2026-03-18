import DashboardMiniCardsIcons from "../ui/DashboardMiniCardsIcons.jsx";
import DashboardRevenueChart from "../ui/DashboardRevenueChart.jsx";
import DashboardPlansPieChart from "../ui/DashboardPlansPieChart.jsx";
import DashboardRecentActivityTable from "../ui/DashboardRecentActivityTable.jsx";

const DashboardPage = () => {
  return (
    <section
      className="rounded-lg
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      {/* Your content */}
      <DashboardMiniCardsIcons />
      <DashboardRevenueChart />
      <DashboardPlansPieChart />
      <DashboardRecentActivityTable />
    </section>
  );
};

export default DashboardPage;
