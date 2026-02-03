import { Switch } from "@headlessui/react";
import { useState } from "react";

const isEnable = true;

const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useState(true);
  if (isEnable) return;

  const handleChange = (value) => {
    setIsDark(value);
    const parentEl = document.documentElement;
    parentEl.setAttribute("data-theme", value ? "dark" : "light");
  };

  return (
    <Switch
      checked={isDark}
      onChange={handleChange}
      className="group relative 
      flex h-7 w-14 cursor-pointer rounded-full 
      bg-white/10 p-1 ease-in-out 
      focus:not-data-focus:outline-none data-checked:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
      />
    </Switch>
  );
};

export default ToggleDarkMode;
