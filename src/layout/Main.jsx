const Main = ({ layoutType }) => {
  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-800/25">
      <div
        className={`
          mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full
          ${
            layoutType === "sidebar"
              ? "max-w-(--main-width) md:mr-(--content-margin)"
              : "mx-auto max-w-7xl"
          }`}
      >
        {/* Your content */}
      </div>
    </main>
  );
};

export default Main;
