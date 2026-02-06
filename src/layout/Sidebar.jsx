import { NavLink } from "react-router-dom";

import navContent from "../data/navContent";
const { brand, navigation, settings } = navContent;
const { name, Icon } = settings;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  return (
    <div
      className="
      relative shadow-sm
      dark:after:pointer-events-none dark:after:absolute 
      dark:after:inset-x-0 dark:after:inset-y-0 
      dark:after:border-x dark:after:border-white/10"
    >
      <aside
        className="hidden 
        md:flex flex-col justify-between
      p-6 min-h-screen
      w-(--sidebar-width)
      ml-(--content-margin)"
      >
        <div className="">
          <div className="shrink-0 px-3 py-2 mb-25">
            <a
              href="./"
              aria-label="Go to homepage"
              className="flex items-center"
            >
              {brand.imageUrl ? (
                <img
                  alt={`${brand.name} logo`}
                  src={brand.imageUrl}
                  className="size-8"
                />
              ) : (
                <span className="text-4xl font-bold tracking-tight text-indigo-500">
                  {brand.name}
                </span>
              )}
            </a>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const Icon = item.Icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={({ isActive }) =>
                      classNames(
                        "rounded-md px-3 py-2 text-md font-medium w-full",
                        isActive
                          ? "text-indigo-600 dark:text-indigo-500 bg-gray-200 dark:bg-gray-950/50"
                          : item.current
                            ? "text-indigo-500 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-500 bg-gray-200 dark:bg-gray-950/50"
                            : "text-gray-500 hover:text-gray-600 hover:bg-gray-200/70 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-white/5",
                      )
                    }
                  >
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="size-7" />}
                      {item.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="rounded-md px-3 py-2 text-md w-full
            text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-white/5"
        >
          <a href="./">
            <div className="flex items-center gap-2">
              {Icon && <Icon className="size-7" />}
              {name}
            </div>{" "}
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
