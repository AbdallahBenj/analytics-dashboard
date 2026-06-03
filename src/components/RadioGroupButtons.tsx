import { RadioGroup } from "@headlessui/react";

type Props<Type extends string> = {
  state: Type;
  setState: React.Dispatch<React.SetStateAction<Type>>;
  stateConfig: Record<Type, { label: string }>;
  RadioGroupClass: string;
  RadioGroupOptionsClass: string;
};

const RadioGroupButtons = <Type extends string>({
  state,
  setState,
  stateConfig,
  RadioGroupClass,
  RadioGroupOptionsClass,
}: Props<Type>) => {
  return (
    <RadioGroup
      value={state}
      onChange={setState}
      aria-label="Select option"
      className={`flex flex-wrap justify-end gap-4 ${RadioGroupClass}`}
    >
      {(Object.entries(stateConfig) as [Type, { label: string }][]).map(
        ([key, { label }]) => (
          <RadioGroup.Option
            as="div"
            key={key}
            value={key}
            className={({ active, checked }) =>
              [
                `${RadioGroupOptionsClass}`,
                "cursor-pointer px-3 py-1.5 rounded-md text-sm text-center font-medium transition flex items-center justify-center",
                checked ? "bg-indigo-500 shadow" : "bg-gray-500/20",
                active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
              ].join(" ")
            }
          >
            {({ checked }) => (
              <span
                className={`text-sm font-medium 
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
        ),
      )}
    </RadioGroup>
  );
};

export default RadioGroupButtons;
