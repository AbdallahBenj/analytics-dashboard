import DashboardMiniCardIcon from "../ui/DashboardMiniCardIcon";
import DashboardPrimaryChart from "../ui/DashboardPrimaryChart";
import RevenueChart from "../service/RevenueChart.jsx";

const DashboardPage = () => {
  return (
    <section
      className="h-full rounded-lg
      flex flex-col gap-3 
    border border-gray-500/10"
    >
      {/* Your content */}
      <DashboardMiniCardIcon />
      <DashboardPrimaryChart />
      <RevenueChart />
    </section>
  );
};

export default DashboardPage;
