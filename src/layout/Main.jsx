const Main = ({ isSidebarLayout }) => {
  return (
    <main className="flex-1">
      <div
        className={`
          mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full
          ${
            isSidebarLayout
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
