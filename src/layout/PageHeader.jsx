import SearchInput from "../components/SearchInput";

const PageHeader = ({ layoutType }) => {
  return (
    <header
      className="relative shadow-sm
      bg-gray-50 dark:bg-gray-800
      dark:after:pointer-events-none dark:after:absolute 
      dark:after:inset-x-0 dark:after:inset-y-0 
      dark:after:border-y dark:after:border-white/10"
    >
      <div
        className={`mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8
          md:flex md:flex-row md:justify-between md:items-center
          ${
            layoutType === "sidebar"
              ? "max-w-(--main-width) md:mr-(--content-margin)"
              : "mx-auto max-w-7xl"
          }`}
      >
        <h1
          className="text-3xl 
          font-bold tracking-tight 
          text-gray-900 dark:text-white"
        >
          Dashboard
        </h1>
        <div className="hidden md:block">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
