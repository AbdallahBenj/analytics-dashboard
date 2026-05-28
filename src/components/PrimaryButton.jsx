import { Button } from "@headlessui/react";

const PrimaryButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="inline-flex items-center gap-2 
    rounded-full
    cursor-pointer 
    px-3 py-1.5 
    text-sm/6 font-semibold 
    text-white bg-indigo-500 dark:bg-indigo-500 
    shadow-inner shadow-white/10 
    focus:not-data-focus:outline-none 
    data-focus:outline 
    data-focus:outline-white 
    data-hover:bg-indigo-400
    data-open:bg-indigo-700"
    >
      Save changes
    </Button>
  );
};

export default PrimaryButton;
