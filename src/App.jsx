import { HashRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CustomersPage from "./pages/CustomersPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import FeaturesPage from "./pages/FeaturesPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
