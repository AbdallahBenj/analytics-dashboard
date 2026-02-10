import DashboardMiniCardIcon from "../ui/DashboardMiniCardIcon";
import DashboardPrimaryChart from "../ui/DashboardPrimaryChart";

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
    </section>
  );
};

export default DashboardPage;
