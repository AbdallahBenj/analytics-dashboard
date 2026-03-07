import DashboardMiniCardsIcons from "../ui/DashboardMiniCardsIcons.jsx";
import DashboardRevenueChart from "../ui/DashboardRevenueChart.jsx";

const DashboardPage = () => {
  return (
    <section
      className="h-full rounded-lg
      flex flex-col gap-3 
    border border-gray-500/10"
    >
      {/* Your content */}
      <DashboardMiniCardsIcons />
      <DashboardRevenueChart />
    </section>
  );
};

export default DashboardPage;
