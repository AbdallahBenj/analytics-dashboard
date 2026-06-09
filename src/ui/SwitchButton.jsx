import { Switch } from "@headlessui/react";
// import { useState } from "react";

const SwitchButton = ({ enabled, setEnabled, ariaLabel }) => {
  // const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      aria-label={ariaLabel}
      className="group relative flex 
      h-6 w-12 cursor-pointer rounded-full 
      dark:bg-white/10 p-1 ease-in-out
      bg-gray-500/20
      focus:not-data-focus:outline-none 
      data-checked:bg-indigo-500 data-focus:outline 
      data-focus:outline-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block 
        size-4 translate-x-0 rounded-full 
        shadow-lg ring-0
        bg-gray-500 dark:bg-gray-300
        group-data-checked:bg-gray-300
        transition duration-200 ease-in-out 
        group-data-checked:translate-x-6"
      />
    </Switch>
  );
};

export default SwitchButton;
