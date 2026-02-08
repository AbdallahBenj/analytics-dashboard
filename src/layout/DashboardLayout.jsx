import { Outlet } from "react-router-dom";

import Header from "./Header";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";

const layoutType = "sidebar"; //  "sidebar" or "header"

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {layoutType === "sidebar" && <Sidebar />}
      <div className="w-full min-h-screen flex flex-col">
        <Header layoutType={layoutType} />
        <PageHeader layoutType={layoutType} />
        <main
          className={`
          h-full
          px-4 py-6 sm:px-6 lg:px-8
          bg-gray-100 dark:bg-gray-800/25
          border border-amber-500
          ${
            layoutType === "sidebar"
              ? "max-w-(--main-width) md:mr-(--content-margin)"
              : "w-full mx-auto max-w-7xl"
          }`}
        >
          {/* Pages content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
