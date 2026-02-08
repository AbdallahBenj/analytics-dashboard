import { NavLink } from "react-router-dom";
import { useState } from "react";

import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import navContent from "../data/navContent";
const { brand, navigation, settings } = navContent;
const { name, Icon } = settings;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
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
          <div className="shrink-0 px-2 py-2 mb-25">
            <a
              href="./"
              aria-label="Go to homepage"
              className="flex items-center gap-2"
            >
              {brand.imageUrl && (
                <img
                  alt={`${brand.name} logo`}
                  src={brand.imageUrl}
                  className="size-10 max-w-fit rounded-full text-indigo-500"
                />
              )}
              <span
                aria-hidden={!isSidebarOpen}
                className={`text-4xl font-semibold tracking-tight text-indigo-500 
                whitespace-nowrap
                transition-[opacity,width] duration-300 ease-in-out 
                ${
                  isSidebarOpen
                    ? "opacity-100 w-auto"
                    : "opacity-0 w-0 pointer-events-none"
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
                        whitespace-nowrap ml-2
                        transition-[opacity,width] duration-300 ease-in-out
                        ${
                          isSidebarOpen
                            ? "opacity-100 w-auto "
                            : "opacity-0 w-0 pointer-events-none"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
            <div className="space-y-1">
              {/* Setting Button Sidebar */}
              <div
                className="rounded-md mx-0
              px-3 py-2 text-md w-full
              text-gray-500 hover:text-indigo-500 
              dark:text-gray-400 dark:hover:text-gray-300 
              hover:bg-gray-200/70 dark:hover:bg-white/5"
              >
                <NavLink to="/">
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
                        whitespace-nowrap ml-2
                        transition-[opacity,width] duration-300 ease-in-out
                        ${
                          isSidebarOpen
                            ? "opacity-100 w-auto "
                            : "opacity-0 w-0 pointer-events-none"
                        }`}
                    >
                      {name}
                    </span>
                  </div>{" "}
                </NavLink>
              </div>
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
                        whitespace-nowrap ml-2
                        transition-[opacity,width] duration-300 ease-in-out
                        ${
                          isSidebarOpen
                            ? "opacity-100 w-auto "
                            : "opacity-0 w-0 pointer-events-none"
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
