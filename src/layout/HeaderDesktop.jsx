import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import ThemeMode from "../components/ThemeMode.tsx";
import NotificationMenu from "../components/NotificationMenu.tsx";

import useStoreLogin from "../store/useStoreLogin";

const HeaderDesktop = () => {
  const userLogin = useStoreLogin((state) => state.userLogin);
  const setLoginOpen = useStoreLogin((state) => state.setLoginOpen);
  const resetLogin = useStoreLogin((state) => state.resetLogin);

  const isUserLogin = !!userLogin;

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
                <span className="absolute z-50 left-0 bottom-0 flex size-3">
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
                right-0 z-10 mt-2 w-48 origin-top-right rounded-md 
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
  );
};

export default HeaderDesktop;
