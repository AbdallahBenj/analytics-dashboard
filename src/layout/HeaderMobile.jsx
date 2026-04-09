import { NavLink, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import ThemeMode from "../components/ThemeMode";
import SearchInput from "../components/SearchInput";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import navContent from "../data/navContent";
const { brand, user, navigation, userNavigation } = navContent;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderMobile = () => {
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
            <div className="shrink-0">
              {user.imageUrl ? (
                <img
                  alt=""
                  src={user.imageUrl}
                  className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                />
              ) : (
                <user.profileIcon className="size-8 rounded-full text-gray-400 outline -outline-offset-1 outline-white/10" />
              )}
            </div>
            <div className="ml-3">
              <div className="text-base/5 font-medium text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-400">
                {user.email}
              </div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={NavLink}
                to={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default HeaderMobile;
