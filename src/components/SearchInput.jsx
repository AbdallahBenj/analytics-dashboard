import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchInput = () => {
  return (
    <div className="md:w-90">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="mt-2">
        <div
          className="
        flex items-center rounded-md pl-3
        bg-white/5 md:bg-gray-100 dark:bg-white/5  
        outline-1 -outline-offset-1 
        outline-gray-600 md:outline-gray-300 dark:outline-gray-600 
        has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 
        has-[input:focus-within]:outline-indigo-500 md:has-[input:focus-within]:outline-indigo-600 dark:has-[input:focus-within]:outline-indigo-500"
        >
          <div
            className="shrink-0 select-none pr-1 
            text-gray-400 md:text-gray-500 dark:text-gray-400"
          >
            <MagnifyingGlassIcon className="size-5" />
          </div>
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search"
            className="block min-w-0 grow
            py-1.5 pr-3 pl-1 
            text-base sm:text-sm/6
            focus:outline-none
            bg-gray-800 md:bg-white dark:bg-gray-800 
            text-white md:text-gray-900 dark:text-white 
            placeholder:text-gray-500 md:placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
