import { MdAdminPanelSettings } from "react-icons/md";

import navContent from "../data/navContent.ts";
const { brand } = navContent;

import useAuthStore from "../store/useAuthStore.ts";
import useAdminLoginStore from "../store/useAdminLoginStore.ts";

import ThemeMode from "../components/ThemeMode.tsx";
import adminLogout from "../service/api/adminLogout.js";

const MainHeader = () => {
  const editor = useAuthStore((state) => state.editor);
  const isAdmin = useAuthStore((state) => state.isAdmin);
  const setDialogOpen = useAdminLoginStore((state) => state.setDialogOpen);

  {
    /* Logo and Site Name */
  }
  return (
    <header
      className="main-header-container 
      flex justify-center gap-2 
      flex-col md:flex-row items-end md:items-center
      w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:pt-6 md:pb-0
      bg-gray-800 md:bg-gray-100 dark:bg-gray-800/25"
    >
      <div
        className="main-header
      flex justify-between items-center
      max-w-6xl w-full"
      >
        <div className="logo">
          <a href="/" aria-label="Go to homepage" className="flex items-center">
            {brand.imageUrl && (
              <img
                alt={`${brand.name} logo`}
                src={brand.imageUrl}
                className="size-12 md:size-16 max-w-fit rounded-full text-indigo-500"
              />
            )}
            <span
              aria-hidden="false"
              className="text-3xl md:text-4xl 
              overflow-hidden
              font-semibold text-indigo-500
              tracking-tight whitespace-nowrap
              transition-[opacity,max-width] duration-300 ease-in-out 
              opacity-100 max-w-50"
            >
              {brand.name}
            </span>
          </a>
        </div>
        <ThemeMode />
      </div>

      <div className="relative md:flex justify-center items-center whitespace-nowrap">
        {!editor ? (
          <button
            // href="/dashboard/overview"
            onClick={() => setDialogOpen(true)}
            className="
            cursor-pointer
            rounded-md mr-3 w-36
            px-6 py-1.5 md:px-7 md:py-2.5 
            text-sm font-semibold 
            text-white bg-indigo-500
            shadow-xs hover:bg-indigo-400 
            focus-visible:outline-2 
            focus-visible:outline-offset-2 
            focus-visible:outline-indigo-500"
          >
            Login
          </button>
        ) : (
          <button
            // href="/dashboard/overview"
            onClick={adminLogout}
            className="cursor-pointer
            rounded-md mr-3  w-36
            px-6 py-1.5 md:px-7 md:py-2.5 
            text-sm font-semibold 
            text-white bg-green-500
            shadow-xs hover:bg-green-400
            focus-visible:outline-2 
            focus-visible:outline-offset-2 
            focus-visible:outline-green-500"
          >
            Logout
          </button>
        )}
        {!!editor && !isAdmin && (
          // Show badge when there's the user Login in
          <span
            className="absolute z-30
          flex justify-center items-center size-5
          left-0 bottom-0 -translate-x-1/2 translate-y-1/2
          rounded-full
            "
          >
            <span
              className="absolute inline-flex h-full w-full 
              rounded-full bg-gray-800 md:bg-gray-100 dark:bg-gray-900"
            ></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
        )}
        {isAdmin && (
          <MdAdminPanelSettings
            className="absolute 
            bottom-0 left-0 -translate-x-1/2 translate-y-1/2 
            size-8 fill-green-500 rounded-full
            bg-gray-800 md:bg-gray-100 dark:bg-gray-900"
          />
        )}
      </div>
    </header>
  );
};

export default MainHeader;
