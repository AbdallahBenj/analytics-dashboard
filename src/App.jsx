import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";

import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CustomersPage from "./pages/CustomersPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import FeaturesPage from "./pages/FeaturesPage";
import ReportsPage from "./pages/ReportsPage";
import NotFoundPage from "./pages/NotFoundPage";

// test events
import useMockDataStore from "./store/useMockDataStore.ts";

// import ErrorsDialog from "./components/ErrorsDialog.tsx";
import LoginDialog from "./components/LoginDialog.tsx";

import AdminLoginDialog from "./components/AdminLoginDialog.tsx";

// import SupabaseData
import { useEffect, useRef } from "react";

import fetchAllSupabaseData from "./service/api/fetchAllSupabaseData.js";
import insertSupabaseData from "./service/api/insertSupabaseData.js";
import listenAuthChange from "./service/api/listenAuthChange.js";

function App() {
  const homeRef = useRef(false);

  const eventsStore = useMockDataStore((state) => state.events);

  // SupabaseData
  useEffect(() => {
    // test events
    // console.log("eventsStore", eventsStore);

    if (homeRef.current) return;
    homeRef.current = true;

    insertSupabaseData();
    fetchAllSupabaseData();
    listenAuthChange();
  }, [eventsStore]);

  return (
    <BrowserRouter>
      <LoginDialog />
      <AdminLoginDialog />

      {/* <ErrorsDialog /> */}

      {/* Main Layout */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<OverviewPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
