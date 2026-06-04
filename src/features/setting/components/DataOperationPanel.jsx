import PrimaryButton from "../../../components/PrimaryButton.jsx";
import DataOperationList from "./DataOperationList.jsx";

const DataOperationPanel = ({
  title = "",
  description = "",
  ariaLabel = "",
  buttonLabel = "",
  loadingButtonLabel = "",
  isLoading = false,
  isOperated,
  setIsOperated,
  setAction,
  operationConfig = {},
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2">
        <div className="mb-2">
          <p className="font-semibold text-gray-600 dark:text-gray-300">
            {title}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <PrimaryButton
          ariaLabel={ariaLabel}
          onClick={() => {
            setIsOperated?.();
            setAction?.();
          }}
          label={isLoading ? loadingButtonLabel : buttonLabel}
        />
      </div>
      {/* // Generated MockData */}
      {isOperated && (
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          {/* // Data list */}
          <DataOperationList
            listTitle="Generated Data"
            dataType="data"
            isLoading={isLoading}
            operationConfig={operationConfig}
          />

          {/* // Events list */}
          <DataOperationList
            listTitle="Generated Events"
            dataType="events"
            isLoading={isLoading}
            operationConfig={operationConfig}
          />
        </div>
      )}
    </div>
  );
};

export default DataOperationPanel;
