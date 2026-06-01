import { Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SelectInput = ({ value, onChange, options, name, ariaLabel }) => {
  return (
    <div className="relative inline-block">
      <Select
        name={name}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        className="
        appearance-none
        min-h-9 min-w-30
        rounded-full
        cursor-pointer
        pl-3 pr-8 py-1.5
        text-sm font-semibold
        text-white
        bg-indigo-500
        shadow-inner shadow-white/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <ChevronDownIcon
        className="
        pointer-events-none
        absolute right-3 top-1/2
        size-4
        -translate-y-1/2
        fill-white/60"
        aria-hidden="true"
      />
    </div>
  );
};

export default SelectInput;
