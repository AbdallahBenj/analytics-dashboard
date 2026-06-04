import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const SelectListbox = ({ value, onChange, options }) => {
  const label = options.find((option) => option.value === value)?.label;

  return (
    <div className="w-full sm:w-fit min-h-9 sm:min-w-50">
      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          className={clsx(
            "cursor-pointer relative block w-full rounded-lg bg-indigo-500 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
          )}
        >
          {label}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-(--button-width) rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-700 p-1 [--anchor-gap:--spacing(1)] focus:outline-none",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0",
          )}
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className="group cursor-pointer flex items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/50 dark:data-focus:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-gray-700 dark:fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-gray-700 dark:text-white">
                {option.label}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default SelectListbox;
