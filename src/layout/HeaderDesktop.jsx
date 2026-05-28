import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import { useLocation } from "react-router-dom";
import navContent from "../data/navContent.ts";
const { navigation } = navContent;

import ThemeMode from "../components/ThemeMode.tsx";
import NotificationMenu from "../components/NotificationMenu.tsx";

import useLoginStore from "../store/useLoginStore.js";

const HeaderDesktop = () => {
  const userLogin = useLoginStore((state) => state.userLogin);
  const setLoginOpen = useLoginStore((state) => state.setLoginOpen);
  const resetLogin = useLoginStore((state) => state.resetLogin);

  const location = useLocation();
  const currentPage = navigation.find(
    (page) => page.href === location.pathname,
  );
  const pageName = currentPage.name || "Unknown Page";
  const HeadingTag = pageName === "Overview" ? "h1" : "h2";

  const isUserLogin = !!userLogin;

  return (
    <div
      className="hidden md:flex z-10
      px-4 pt-6 sm:px-6 lg:px-8 pb-0
      max-w-(--main-width) md:mr-(--content-margin)
      bg-gray-800 md:bg-gray-100 dark:bg-gray-800/25"
    >
      <div
        className=" w-full px-2 z-20
        rounded-2xl cursor-default
        
        bg-white/60 dark:bg-gray-900/40
        backdrop-blur-md
        
        border border-white/20 dark:border-white/10
        
        shadow-md shadow-black/10
        hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5
        transition-all duration-300"
      >
        <div
          className="mx-auto 
        h-20 w-full 
        px-4
        flex items-center justify-between"
        >
          {/* // Page Title */}
          <HeadingTag
            className={`text-3xl 
          font-bold tracking-tight
          ${
            pageName === "Overview"
              ? "text-gray-700 dark:text-gray-100"
              : "text-gray-600 dark:text-gray-200"
          }
          `}
          >
            {pageName}
          </HeadingTag>

          {/* // Desktop menu */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Button */}
            <ThemeMode />

            {/* Notifications Icon */}
            <NotificationMenu />

            {/* Desktop Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton
                className="group
            relative cursor-pointer 
            flex max-w-xs items-center rounded-full 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon
                  className="relative size-8 rounded-full 
                        text-gray-400 
                        group-hover:text-gray-500 dark:group-hover:text-white 
                        outline -outline-offset-1 outline-white/10"
                />
                {isUserLogin && (
                  // Show badge when there's the user Login in
                  <span className="absolute z-30 left-0 bottom-0 flex size-3">
                    <span
                      className="absolute inline-flex h-full w-full 
                    rounded-full bg-emerald-400 opacity-75"
                    ></span>
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
                  </span>
                )}
              </MenuButton>
              <MenuItems
                transition
                className="absolute
                right-0 z-20 mt-2 w-48 origin-top-right rounded-md 
                bg-white dark:bg-gray-800 py-1 shadow-lg 
                outline-1 outline-black/5 dark:outline-white/10 
                transition data-closed:scale-95 data-closed:transform 
                data-closed:opacity-0 data-enter:duration-100 
                data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                {/* // test start // User Name and email */}
                <div
                  className="px-4 py-2
                  border-b border-gray-200 dark:border-white/10"
                >
                  <div className="text-base/5 font-medium text-gray-700 dark:text-gray-200">
                    {userLogin?.name || "Guest"}
                  </div>
                  {userLogin?.email ? (
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {userLogin?.email}
                    </div>
                  ) : null}
                </div>
                {!isUserLogin ? (
                  <MenuItem>
                    <button
                      type="button"
                      onClick={() => setLoginOpen(true)}
                      className="block w-full text-left
                    cursor-pointer px-4 py-2 text-sm 
                    data-focus:bg-gray-100 dark:data-focus:bg-white/5 
                    text-gray-700 dark:text-gray-300
                    data-focus:outline-hidden"
                    >
                      Login
                    </button>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <button
                      onClick={() => {
                        resetLogin();
                        setLoginOpen(false);
                      }}
                      className="block 
                        w-full text-left
                        px-4 py-2 text-sm 
                        text-gray-700 dark:text-gray-300
                        data-focus:bg-gray-100 dark:data-focus:bg-white/5 
                        data-focus:outline-hidden"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
