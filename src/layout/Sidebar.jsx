import { NavLink } from "react-router-dom";
import { useState } from "react";

import { ChevronUpDownIcon, ArrowPathIcon } from "@heroicons/react/20/solid";

import navContent from "../data/navContent";
const { brand, navigation, settings } = navContent;
const { name, Icon } = settings;

import useGlobalFetchedData from "../features/dashboard/hooks/useGlobalFetchedData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const { globalStatus, retryDataAndEvents } = useGlobalFetchedData();
  const isLoading = globalStatus.isDataAndEventsLoading;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className="
      relative shadow-sm
      dark:after:pointer-events-none dark:after:absolute 
      dark:after:inset-x-0 dark:after:inset-y-0 
      dark:after:border-x dark:after:border-white/10"
    >
      <aside
        className={`hidden
        md:flex flex-col
        p-6 ml-(--content-margin) min-h-screen
        transition-[width] duration-300 ease-in-out
        ${isSidebarOpen ? "w-(--open-sidebar-width)" : "w-(--close-sidebar-width)"}`}
      >
        <div className="flex flex-col flex-1">
          {/* Logo and Site Name */}
          <div className={`shrink-0 mb-25`}>
            <a
              href="./"
              aria-label="Go to homepage"
              className="flex items-center px-2 py-2"
            >
              {brand.imageUrl && (
                <img
                  alt={`${brand.name} logo`}
                  src={brand.imageUrl}
                  className="size-9 max-w-fit rounded-full text-indigo-500"
                />
              )}
              <span
                aria-hidden={!isSidebarOpen}
                className={`text-4xl font-semibold tracking-tight text-indigo-500 ml-2
                  overflow-hidden
                  whitespace-nowrap
                  transition-[opacity,max-width] duration-300 ease-in-out 
                  ${
                    isSidebarOpen
                      ? "opacity-100 max-w-50 "
                      : "opacity-0 max-w-0"
                  }`}
              >
                {brand.name}
              </span>
            </a>
          </div>
          <div className="flex flex-col justify-between flex-1">
            {/* Navigation Buttons Sidebar */}
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const Icon = item.Icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        "rounded-md px-3 py-2 text-md font-medium w-full",
                        isActive
                          ? "text-indigo-600 dark:text-indigo-500 bg-gray-200 dark:bg-gray-950/50"
                          : "text-gray-500 hover:text-gray-600 hover:bg-gray-200/70 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-white/5",
                      )
                    }
                  >
                    <div className="flex items-center">
                      <span>
                        {Icon && (
                          <Icon
                            className="size-7"
                            aria-hidden={isSidebarOpen}
                            aria-label={!isSidebarOpen ? item.name : undefined}
                          />
                        )}
                      </span>
                      <span
                        aria-hidden={!isSidebarOpen}
                        className={`
                          overflow-hidden
                          whitespace-nowrap ml-2
                          transition-[opacity,max-width] duration-300 ease-in-out
                          ${
                            isSidebarOpen
                              ? "opacity-100 max-w-50 "
                              : "opacity-0 max-w-0"
                          }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
            <div className="flex flex-col space-y-2">
              {/* Setting Button Sidebar */}
              {/* <NavLink to="/">
                <div
                  className="rounded-md mx-0
              px-3 py-2 text-md w-full
              text-gray-500 hover:text-indigo-500 
              dark:text-gray-400 dark:hover:text-gray-300 
              hover:bg-gray-200/70 dark:hover:bg-white/5"
                >
                  <div className="flex items-center">
                    <span>
                      {Icon && (
                        <Icon
                          className="size-7"
                          aria-hidden={isSidebarOpen}
                          aria-label={!isSidebarOpen ? name : undefined}
                        />
                      )}
                    </span>
                    <span
                      aria-hidden={!isSidebarOpen}
                      className={`
                        overflow-hidden
                        whitespace-nowrap ml-2
                        transition-[opacity,max-width] duration-300 ease-in-out
                        ${
                          isSidebarOpen
                            ? "opacity-100 max-w-50 "
                            : "opacity-0 max-w-0"
                        }`}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              </NavLink> */}

              {/* Refresh Data And Event button */}
              <button
                type="button"
                onClick={retryDataAndEvents}
                disabled={isLoading}
                aria-label="Refresh data and events"
                className="cursor-pointer
                rounded-md
                px-3 py-2 text-md w-full
                text-indigo-600 hover:text-indigo-500 
                dark:text-indigo-500 dark:hover:text-gray-300 
                hover:bg-gray-200/70 dark:hover:bg-white/5
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center">
                  <span>
                    <ArrowPathIcon
                      aria-hidden="true"
                      className={`size-7
                      transition-transform duration-500
                      ${isLoading ? "rotate-180" : ""}`}
                    />
                  </span>
                  <span
                    aria-hidden={!isSidebarOpen}
                    className={`
                      overflow-hidden
                      whitespace-nowrap ml-2
                      transition-[opacity,max-width] duration-300 ease-in-out
                      ${
                        isSidebarOpen
                          ? "opacity-100 max-w-50 "
                          : "opacity-0 max-w-0"
                      }`}
                  >
                    Refresh
                  </span>
                </div>
              </button>
              {/* Toggle Button Sidebar */}
              <button
                type="button"
                onClick={handleOpen}
                aria-expanded={isSidebarOpen}
                aria-label={
                  isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"
                }
                className="cursor-pointer
                rounded-md
                px-3 py-2 text-md w-full
                text-gray-500 hover:text-indigo-500 
                dark:text-gray-400 dark:hover:text-gray-300 
                hover:bg-gray-200/70 dark:hover:bg-white/5"
              >
                <div className="flex items-center">
                  <span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className={`size-7
                      transition-transform duration-200
                      ${isSidebarOpen ? "rotate-90" : "-rotate-90"}`}
                    />
                  </span>
                  <span
                    aria-hidden={!isSidebarOpen}
                    className={`
                      overflow-hidden
                      whitespace-nowrap ml-2
                      transition-[opacity,max-width] duration-300 ease-in-out
                      ${
                        isSidebarOpen
                          ? "opacity-100 max-w-50 "
                          : "opacity-0 max-w-0"
                      }`}
                  >
                    Collapse
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
