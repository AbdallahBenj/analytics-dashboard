import { RadioGroup } from "@headlessui/react";

const RadioGroupButtons = ({ state, setState, stateConfig }) => {
  return (
    <RadioGroup
      value={state}
      onChange={setState}
      aria-label="Select range"
      className="flex flex-wrap justify-end gap-4"
    >
      {Object.entries(stateConfig).map(([key, { label }]) => (
        <RadioGroup.Option
          as="div"
          key={key}
          value={key}
          className={({ active, checked }) =>
            [
              "px-3 py-1.5 rounded-md text-sm text-center font-medium transition w-fit flex items-center justify-center",
              checked ? "bg-indigo-500 shadow" : "bg-gray-500/20",
              active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
            ].join(" ")
          }
        >
          {({ checked }) => (
            <span
              className={`cursor-pointer text-sm font-medium 
                  ${
                    checked
                      ? "text-indigo-50"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200"
                  }
                  `}
            >
              {label}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupButtons;
