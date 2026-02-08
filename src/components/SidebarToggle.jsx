import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SidebarToggle = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      aria-expanded={isSidebarOpen}
      aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      className="absolute
        cursor-pointer
        size-8 -right-10 bottom-7
        rounded  
        text-gray-700 dark:text-gray-100
        focus-visible:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-indigo-500
        bg-white/5 hover:bg-white/10"
    >
      <ChevronDownIcon
        aria-hidden="true"
        className={`transition-transform duration-200
          ${isSidebarOpen ? "rotate-90" : "-rotate-90"}`}
      />
    </button>
  );
};

export default SidebarToggle;
