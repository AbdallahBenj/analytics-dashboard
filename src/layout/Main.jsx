// Not Active

import { Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import AnalyticsPage from "../pages/AnalyticsPage";

const Main = ({ layoutType }) => {
  return (
    <main
      className={`
          mx-auto w-full h-full
          px-4 py-6 sm:px-6 lg:px-8
          bg-gray-100 dark:bg-gray-800/25
          ${
            layoutType === "sidebar"
              ? "max-w-(--main-width) md:mr-(--content-margin)"
              : "max-w-7xl"
          }`}
    >
      {/* Your content */}
    </main>
  );
};

export default Main;
