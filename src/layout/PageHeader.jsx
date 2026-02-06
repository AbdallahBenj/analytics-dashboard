import { useLocation } from "react-router-dom";

import SearchInput from "../components/SearchInput";
import navContent from "../data/navContent";
const { navigation } = navContent;

const PageHeader = ({ layoutType }) => {
  const location = useLocation();

  const page = navigation.find((page) => page.href === location.pathname);
  const pageName = page ? page.name : "Unknown Page";

  return (
    <header
      className="relative shadow-sm
      bg-gray-50 dark:bg-gray-800
      dark:after:pointer-events-none dark:after:absolute 
      dark:after:inset-x-0 dark:after:inset-y-0 
      dark:after:border-y dark:after:border-white/10"
    >
      <div
        className={`mx-auto px-4 py-6 sm:px-6 lg:px-8
          md:flex md:flex-row md:justify-between md:items-center
          ${
            layoutType === "sidebar"
              ? "max-w-(--main-width) md:mr-(--content-margin)"
              : "max-w-7xl"
          }`}
      >
        {pageName === "Dashboard" ? (
          <h1
            className="text-3xl 
          font-bold tracking-tight
          text-gray-800 dark:text-white"
          >
            {pageName}
          </h1>
        ) : (
          <h2
            className="text-3xl 
          font-bold tracking-tight
          text-gray-700 dark:text-gray-100"
          >
            {pageName}
          </h2>
        )}
        <div className="hidden md:block w-full max-w-90 ml-6">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
