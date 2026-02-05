import navContent from "../data/navContent";
const { brand, navigation } = navContent;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  return (
    <aside>
      <div className="flex items-center">
        <div className="shrink-0">
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
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white dark:bg-gray-950/50 dark:text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium",
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
