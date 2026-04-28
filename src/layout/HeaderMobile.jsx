import { NavLink, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import ThemeMode from "../components/ThemeMode.tsx";
import SearchInput from "../components/SearchInput.tsx";
import NotificationMenu from "../components/NotificationMenu.tsx";

import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import navContent from "../data/navContent.ts";
const { brand, navigation } = navContent;

import useStoreLogin from "../store/useStoreLogin.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderMobile = () => {
  const userLogin = useStoreLogin((state) => state.userLogin);
  const setLoginOpen = useStoreLogin((state) => state.setLoginOpen);
  const resetLogin = useStoreLogin((state) => state.resetLogin);

  const isUserLogin = !!userLogin;

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 md:bg-gray-100 dark:bg-gray-800/25 md:hidden"
    >
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-(--main-width) md:mr-(--content-margin)">
        {/* // Mobile menu Logo */}
        <Link to="/" aria-label="Go to homepage" className="flex items-center">
          {brand.imageUrl && (
            <img
              alt={`${brand.name} logo`}
              src={brand.imageUrl}
              className="size-10 rounded-full"
            />
          )}
          {brand.name && (
            <span className="text-3xl ml-2 font-bold tracking-tight text-indigo-500">
              {brand.name}
            </span>
          )}
        </Link>

        {/* // Dark Mode Button and Mobile menu button */}
        <div className="flex items-center">
          {/* Dark Mode Button */}
          <ThemeMode />
          {/* Mobile menu button */}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-open:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-open:block"
            />
          </DisclosureButton>
        </div>
      </div>
      {/* // Mobile menu, show/hide based on menu state. */}
      <DisclosurePanel>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                "block rounded-md px-3 py-2 text-base font-medium",
                item.current
                  ? "text-white bg-gray-900 dark:bg-gray-950/50 "
                  : "text-gray-300 hover:text-white hover:bg-white/5 ",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="px-3">
            <SearchInput />
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="relative shrink-0">
              <UserCircleIcon
                className="size-8 rounded-full
              text-gray-400 outline -outline-offset-1 outline-white/10"
              />
              {isUserLogin && (
                // Show badge when there's the user Login in
                <span className="absolute left-0 bottom-0 flex size-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
                </span>
              )}
            </div>
            <div className="ml-3">
              <div className="text-base/5 font-medium text-white">
                {userLogin?.name || "Guest"}
              </div>
              {userLogin?.email ? (
                <div className="text-sm font-medium text-gray-400">
                  {userLogin.email}
                </div>
              ) : null}
            </div>
            {/* Notification */}
            <NotificationMenu />
          </div>
          <div className="mt-3 space-y-1 px-2">
            {!isUserLogin ? (
              <DisclosureButton
                as="button"
                onClick={() => setLoginOpen(true)}
                className="block rounded-md w-full
                px-3 py-2 text-base font-medium 
                text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white"
              >
                Login
              </DisclosureButton>
            ) : (
              <DisclosureButton
                as="button"
                onClick={() => {
                  resetLogin();
                  setLoginOpen(false);
                }}
                className="block rounded-md
                  px-3 py-2 text-base font-medium w-full
                  text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white"
              >
                Sign out
              </DisclosureButton>
            )}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default HeaderMobile;
