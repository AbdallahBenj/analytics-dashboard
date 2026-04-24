import { useLocation } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

import useGlobalFetchedData from "../hooks/useGlobalFetchedData";

import SearchInput from "../components/SearchInput";
import navContent from "../data/navContent";
const { navigation } = navContent;

const PageHeader = () => {
  const { globalStatus, retryDataAndEvents } = useGlobalFetchedData();
  const isLoading = globalStatus.isDataAndEventsLoading;

  const location = useLocation();

  const currentPage = navigation.find(
    (page) => page.href === location.pathname,
  );
  const pageName = currentPage ? currentPage.name : "Unknown Page";
  const HeadingTag = pageName === "Dashboard" ? "h1" : "h2";

  return (
    <header
      className="relative shadow-sm
      bg-gray-50 dark:bg-gray-800
      dark:after:pointer-events-none dark:after:absolute 
      dark:after:inset-x-0 dark:after:inset-y-0 
      dark:after:border-y dark:after:border-white/10"
    >
      <div
        className="mx-auto px-4 py-6 sm:px-6 lg:px-8 w-full
        flex flex-row justify-between items-center
        max-w-(--main-width) md:mr-(--content-margin)"
      >
        {
          <HeadingTag
            className={`text-3xl 
          font-bold tracking-tight
          ${
            pageName === "Dashboard"
              ? "text-gray-700 dark:text-gray-100"
              : "text-gray-600 dark:text-gray-200"
          }
          `}
          >
            {pageName}
          </HeadingTag>
        }
        <button
          type="button"
          onClick={retryDataAndEvents}
          disabled={isLoading}
          aria-label="Refresh data and events"
          className="md:hidden
          cursor-pointer
          px-3 py-1.5 rounded-md
          text-sm text-center font-medium
          w-fit flex items-center justify-center
          text-indigo-50 bg-indigo-500 shadow
          active:ring-2 active:ring-offset-2 active:ring-indigo-500
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center">
            <span>
              <ArrowPathIcon
                aria-hidden="true"
                className={`size-7 transition-transform duration-500 
                ${isLoading ? "rotate-180" : ""}`}
              />
            </span>
            <span
              // aria-hidden={!isSidebarOpen}
              className="overflow-hidden whitespace-nowrap ml-2"
            >
              Refresh
            </span>
          </div>
        </button>
        <div className="hidden md:block w-full max-w-90 ml-6">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
