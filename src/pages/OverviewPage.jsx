import OverviewMiniCards from "../features/overview/components/OverviewMiniCards.tsx";
import OverviewRevenueChart from "../features/overview/components/OverviewRevenueChart.jsx";
import OverviewPlansPieChart from "../features/overview/components/OverviewPlansPieChart.jsx";
import OverviewRecentActivity from "../features/overview/components/OverviewRecentActivity.jsx";

const OverviewPage = () => {
  return (
    <section
      className="rounded-lg
      grid grid-cols-4 gap-4"
    >
      {/* Your content */}
      <OverviewMiniCards />
      <OverviewRevenueChart />
      <OverviewPlansPieChart />
      <OverviewRecentActivity />
    </section>
  );
};

export default OverviewPage;
