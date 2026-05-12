import navContent from "../data/navContent.ts";
const { brand } = navContent;

import ThemeMode from "../components/ThemeMode.tsx";

const MainHeader = () => {
  {
    /* Logo and Site Name */
  }
  return (
    <header
      className="main-header-container 
      flex justify-center
      w-full px-4 py-4 sm:py-6 md:pt-6 md:pb-0 lg:px-8
      bg-gray-800 md:bg-gray-100 dark:bg-gray-800/25"
    >
      <div
        className="main-header
      flex justify-between items-center
      max-w-7xl w-full"
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
        <div className="flex items-center gap-6">
          <ThemeMode />
          <a
            href="/dashboard/overview"
            className=" hidden md:block rounded-md 
            bg-indigo-500 px-7 py-2.5 text-sm font-semibold text-white 
            shadow-xs hover:bg-indigo-400 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-indigo-500"
          >
            Live Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
