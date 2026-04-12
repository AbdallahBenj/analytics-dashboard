import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";

import ThemeMode from "../components/ThemeMode";
import navContent from "../data/navContent";
const { user, userNavigation } = navContent;

const HeaderDesktop = () => {
  return (
    <div className="hidden md:flex bg-gray-800 md:bg-gray-100 dark:bg-gray-800/25">
      <div
        className="mx-auto 
        h-16 w-full 
        px-4 sm:px-6 lg:px-8
        flex items-center justify-end
        max-w-(--main-width) md:mr-(--content-margin)"
      >
        {/* // Desktop menu */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Button */}
          <ThemeMode />

          {/* Notifications */}
          <button
            type="button"
            className="relative cursor-pointer rounded-full p-1 
                  text-gray-400 
                  hover:text-gray-500 dark:hover:text-white 
                  focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

          {/* Desktop Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <MenuButton className="group relative cursor-pointer flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              {user.imageUrl ? (
                <img
                  alt={user.name || "User avatar"}
                  src={user.imageUrl}
                  className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                />
              ) : user.profileIcon ? (
                <user.profileIcon
                  className="size-8 rounded-full 
                        text-gray-400 
                        group-hover:text-gray-500 dark:group-hover:text-white 
                        outline -outline-offset-1 outline-white/10"
                />
              ) : null}
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg outline-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              {/* // test start // User Name and email */}
              <div
                className="px-4 py-2
              border-b border-gray-200 dark:border-white/10"
              >
                <div className="text-base/5 font-medium text-gray-700 dark:text-gray-200">
                  {user ? user.name : "Guest"}
                </div>
                <div className="text-sm font-medium dark:text-gray-400">
                  {user.email}
                </div>
              </div>
              {/* // test end // User Name and email */}
              {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                  <NavLink
                    to={item.href}
                    className="block px-4 py-2 text-sm 
                          text-gray-700 dark:text-gray-300 
                          data-focus:bg-gray-100 dark:data-focus:bg-white/5 
                          data-focus:outline-hidden"
                  >
                    {item.name}
                  </NavLink>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
