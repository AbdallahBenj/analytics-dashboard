import { Switch } from "@headlessui/react";
import { useState } from "react";

const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  const handleChange = (value) => {
    setIsDark(value);
    const parentEl = document.documentElement;
    parentEl.classList.toggle("dark", value);
  };

  return (
    <Switch
      checked={isDark}
      onChange={handleChange}
      className="group relative 
      flex h-7 w-14 cursor-pointer rounded-full 
      bg-white/10 p-1 ease-in-out 
      focus:not-data-focus:outline-none data-checked:bg-indigo-500 data-focus:outline data-focus:outline-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
      />
    </Switch>
  );
};

export default ToggleDarkMode;
