import { Outlet } from "react-router-dom";

import Header from "./Header";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <PageHeader />
        <main
          className="
          h-full
          px-4 py-6 sm:px-6 lg:px-8
          bg-gray-100 dark:bg-gray-800/25
          max-w-(--main-width) md:mr-(--content-margin)"
        >
          {/* Pages content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
