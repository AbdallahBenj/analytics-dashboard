import OverviewMiniCards from "../features/overview/components/OverviewMiniCards.tsx";
import OverviewRevenueChart from "../features/overview/components/OverviewRevenueChart.tsx";
import OverviewPlansPieChart from "../features/overview/components/OverviewPlansPieChart.tsx";
import OverviewActivityTable from "../features/overview/components/OverviewActivityTable.tsx";

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
      <OverviewActivityTable />
    </section>
  );
};

export default OverviewPage;
