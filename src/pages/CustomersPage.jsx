import ComingSoon from "../components/ComingSoon";

// import Errors Dialog
import useGlobalMockData from "../hooks/useGlobalMockData.js";
import ErrorsDialog from "../components/ErrorsDialog.tsx";
import LoginDialog from "../components/LoginDialog.tsx";

const CustomersPage = () => {
  // Check  isErrors
  const { globalStatus } = useGlobalMockData();
  const { isDataAndEventsErrors } = globalStatus;

  return (
    <section
      className="rounded-lg h-full
      grid grid-cols-4 gap-4
      border border-gray-500/10"
    >
      {/* Errors Dialog */}
      {isDataAndEventsErrors && <ErrorsDialog />}

      {/* The content */}

      {/* Coming soon content */}
      <ComingSoon />
    </section>
  );
};

export default CustomersPage;
