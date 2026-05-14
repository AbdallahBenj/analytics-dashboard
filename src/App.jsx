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

// import ErrorsDialog from "./components/ErrorsDialog.tsx";
import LoginDialog from "./components/LoginDialog.tsx";

import AdminLoginDialog from "./components/AdminLoginDialog.tsx";

//test check Admin
import { useEffect } from "react";
// import useAuthStore from "./store/useAuthStore.js";
// import checkAdmin from "./service/api/checkAdmin.js";
import listenAuthChange from "./service/api/listenAuthChange.js";

function App() {
  // const isAdmin = useAuthStore((state) => state.isAdmin);
  // const user = useAuthStore((state) => state.user);
  useEffect(() => {
    // checkAdmin();
    // console.log("user", user?.role);
    // console.log("user", !!user);
    // console.log("isAdmin", isAdmin);
    listenAuthChange();
  }, []);

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
