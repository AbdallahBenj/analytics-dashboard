import { useState, useEffect } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import useGlobalFetchedData from "../hooks/useGlobalFetchedData";

const ErrorsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { globalStatus, retryDataAndEvents } = useGlobalFetchedData();
  const { isDataAndEventsErrors, dataAndEventsErrors } = globalStatus;

  useEffect(() => {
    setIsOpen(isDataAndEventsErrors);
  }, [isDataAndEventsErrors]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Dialog container */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          className="max-w-lg space-y-4 border p-12 rounded-2xl
            text-gray-700 dark:text-gray-300

            bg-gray-100/90 dark:bg-gray-900/90
            backdrop-blur-md
            
            border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-lg hover:shadow-black/20
            transition-all duration-300"
        >
          <DialogTitle className="font-bold text-lg text-red-600">
            Something went wrong
          </DialogTitle>

          <Description className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            We encountered some issues while processing your request.
            <br />
            <span className="font-semibold text-emerald-500">
              Please try again
            </span>
          </Description>

          {isDataAndEventsErrors && (
            <div className="mt-4 space-y-2">
              {dataAndEventsErrors.map((error) => (
                <p
                  key={error.id}
                  className="text-sm text-red-500 bg-gray-500/20 px-3 py-2 rounded-md"
                >
                  &#9679; {error.label} : {error.message}.
                </p>
              ))}
            </div>
          )}
          <div className="flex gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer
                px-3 py-1.5 rounded-md 
                text-sm text-center font-medium
                text-gray-600 dark:text-gray-300 
                bg-gray-500/20 dark:bg-gray-500/20 
                hover:bg-gray-500/30 dark:hover:bg-gray-500/30
                transition flex items-center justify-center"
            >
              Cancel
            </button>
            <button
              onClick={retryDataAndEvents}
              className="cursor-pointer flex-1
                px-3 py-1.5 rounded-md 
                text-sm text-center font-medium 
                text-gray-300 bg-indigo-500 hover:bg-indigo-600 
                transition flex items-center justify-center shadow"
            >
              Retry
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ErrorsDialog;
