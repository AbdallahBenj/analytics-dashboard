import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import ThemeMode from "../components/ThemeMode";
import SearchInput from "../components/SearchInput";
import navContent from "../data/navContent";
const { brand, user, navigation, userNavigation } = navContent;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ layoutType }) => {
  return (
    <header>
      <Disclosure
        as="nav"
        className="bg-gray-800 md:bg-gray-100 dark:bg-gray-800/25"
      >
        <div
          className={`
            mx-auto px-4 sm:px-6 lg:px-8 
          ${
            layoutType === "sidebar"
              ? "max-w-(--main-width) md:mr-(--content-margin)"
              : "mx-auto max-w-7xl"
          }`}
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div
                className={`shrink-0 ${layoutType === "sidebar" ? "md:hidden" : ""}`}
              >
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
                    <span className="text-3xl font-bold tracking-tight text-indigo-500">
                      {brand.name}
                    </span>
                  )}
                </a>
              </div>
              {layoutType === "header" && (
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "text-white hover:text-indigo-400 dark:text-white dark:hover:text-indigo-500 bg-gray-900 dark:bg-gray-950/50"
                            : "text-gray-500 hover:text-indigo-500 hover:bg-gray-200/70 dark:text-gray-400 dark:hover:text-gray-200  dark:hover:bg-white/5",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Dark Mode Button */}
                <ThemeMode />
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

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="group relative cursor-pointer flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {user.imageUrl ? (
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                      />
                    ) : (
                      <user.profileIcon
                        className="size-8 rounded-full 
                        text-gray-400 
                        group-hover:text-gray-500 dark:group-hover:text-white 
                        outline -outline-offset-1 outline-white/10"
                      />
                    )}
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg outline-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm 
                          text-gray-700 dark:text-gray-300 
                          data-focus:bg-gray-100 dark:data-focus:bg-white/5 
                          data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
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
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900  dark:bg-gray-950/50 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium",
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
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
};

export default Header;
