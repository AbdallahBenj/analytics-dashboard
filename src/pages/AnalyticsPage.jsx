import ComingSoon from "../components/ComingSoon";

import AnalyticsRevenueTrendChart from "../features/analyticsSection/components/AnalyticsRevenueTrendChart";

const AnalyticsPage = () => {
  return (
    <section
      className="rounded-lg h-full
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      <AnalyticsRevenueTrendChart />

      {/* Coming soon content */}
      <ComingSoon />
    </section>
  );
};

export default AnalyticsPage;
