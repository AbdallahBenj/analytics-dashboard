import { useState } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

import useSystemMode from "../hooks/useSystemMode.js";
import useThemeMode from "../hooks/useThemeMode.js";

const plans = [
  { name: "light", icon: SunIcon },
  { name: "system", icon: ComputerDesktopIcon },
  { name: "dark", icon: MoonIcon },
];

const ThemeMode = () => {
  const [selected, setSelected] = useState(() => {
    if (typeof window === "undefined") return;
    return localStorage.getItem("theme") ?? "system";
  });

  const systemMode = useSystemMode();
  useThemeMode({ selected, systemMode });

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
      className="flex h-8 w-25 md:w-22 flex-row rounded-full mr-3
      bg-white/10 p-1 ease-in-out"
    >
      {plans.map((plan) => {
        const Icon = plan.icon;
        return (
          <Field key={plan.name} className="flex items-center gap-2 space-x-1">
            <Radio
              value={plan.name}
              className="group 
              flex items-center justify-center 
              rounded-full size-7 md:size-6
              data-checked:bg-white/25
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Icon className="size-6 md:size-5 rounded-full text-gray-500 group-data-checked:text-white" />
            </Radio>
            <Label className="sr-only">{plan.name}</Label>
          </Field>
        );
      })}
    </RadioGroup>
  );
};

export default ThemeMode;
