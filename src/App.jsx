import { HashRouter, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import { Waveform } from 'ldrs/react'
// import 'ldrs/react/Waveform.css'

// const DashboardLayout = lazy(() => import("./layout/DashboardLayout"));
// const DashboardPage = lazy(() => import("./pages/DashboardPage"));
// const AnalyticsPage = lazy(() => import("./pages/AnalyticsPage"));
// const CustomersPage = lazy(() => import("./pages/CustomersPage"));
// const SubscriptionsPage = lazy(() => import("./pages/SubscriptionsPage"));
// const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
// const ReportsPage = lazy(() => import("./pages/ReportsPage"));

import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CustomersPage from "./pages/CustomersPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import FeaturesPage from "./pages/FeaturesPage";
import ReportsPage from "./pages/ReportsPage";
import ErrorsDialog from "./components/ErrorsDialog";

function App() {
  return (
    <HashRouter>
      <ErrorsDialog />
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
