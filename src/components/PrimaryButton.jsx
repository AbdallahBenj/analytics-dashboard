import { Button } from "@headlessui/react";

const PrimaryButton = ({ onClick, label, disabled, ariaLabel }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-flex justify-center items-center gap-2 
      min-h-9 min-w-30
    rounded-full
    cursor-pointer 
    px-3 py-1.5 
    text-sm/6 font-semibold 
    text-white bg-indigo-500 
    shadow-inner shadow-white/10 
    focus:not-data-focus:outline-none 
    data-focus:outline 
    data-focus:outline-white 
    data-hover:bg-indigo-600
    data-open:bg-indigo-700
    disabled:bg-gray-600
    disabled:cursor-not-allowed"
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
