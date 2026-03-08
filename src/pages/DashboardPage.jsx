import DashboardMiniCardsIcons from "../ui/DashboardMiniCardsIcons.jsx";
import DashboardRevenueChart from "../ui/DashboardRevenueChart.jsx";
import DashboardPlansPieChart from "../ui/DashboardPlansPieChart.jsx";

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
    </section>
  );
};

export default DashboardPage;
