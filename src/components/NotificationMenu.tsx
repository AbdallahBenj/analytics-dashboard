import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { BellIcon } from "@heroicons/react/24/outline";

import useStoreLogin from "../store/useStoreLogin";

const NotificationMenu = () => {
  const notification = useStoreLogin((state) => state.notification);
  const resetNotification = useStoreLogin((state) => state.resetNotification);

  const userLogin = useStoreLogin((state) => state.userLogin);
  const isUserLogin = !!userLogin;

  return (
    <Disclosure as="div" className="relative ml-auto">
      <DisclosureButton
        type="button"
        onClick={() => {
          if (notification) {
            setTimeout(() => resetNotification(), 500);
          }
        }}
        className="relative cursor-pointer rounded-full p-1 
                  text-gray-400 
                  hover:text-gray-500 dark:hover:text-white 
                  focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <BellIcon aria-hidden="true" className="size-6" />
        {!!notification && (
          // Show badge when there's a new notification
          <span className="absolute z-50 left-0 bottom-0 flex size-3">
            <span
              className="absolute inline-flex h-full w-full 
                    rounded-full bg-indigo-400 opacity-75"
            ></span>
            <span className="relative inline-flex size-3 rounded-full bg-indigo-500"></span>
          </span>
        )}
      </DisclosureButton>
      <DisclosurePanel
        transition
        className="absolute 
                right-0 z-10 mt-2 w-48 origin-top-right rounded-md 
                bg-white dark:bg-gray-800 py-1 shadow-lg 
                outline-1 outline-black/5 dark:outline-white/10 
                transition data-closed:scale-95 data-closed:transform 
                data-closed:opacity-0 data-enter:duration-100 
                data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {/* Notification Message */}
        <div className="px-4 py-2">
          {isUserLogin && (
            <p className="text-base/5 font-medium text-gray-700 dark:text-gray-200">
              Welcome back 👋
            </p>
          )}
          {notification ? (
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {notification}
            </p>
          ) : (
            <p className="text-sm text-gray-400">No new notifications</p>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NotificationMenu;
