import { useEffect } from "react";
import useFetchedGenerateData from "./useFetchedGenerateData";
import useStoreFetchedData from "../../../store/useStoreFetchedData";

const useGlobalFetchedData = () => {
  const {
    isLoading, // boolean
    isErrors, // boolean
    errors, // []
    fetchedTimeData, // []
    fetchedUsersData, // []
    fetchedSubsData, // []
    fetchedPaymentsData, // []
  } = useFetchedGenerateData();

  const { fetchedData, setLoading, setErrors, setFetchedData } =
    useStoreFetchedData();

  useEffect(() => {
    setLoading(isLoading);
    setErrors(errors);

    setFetchedData({ key: "fetchedTimeData", value: fetchedTimeData });
    setFetchedData({ key: "fetchedUsersData", value: fetchedUsersData });
    setFetchedData({ key: "fetchedSubsData", value: fetchedSubsData });
    setFetchedData({ key: "fetchedPaymentsData", value: fetchedPaymentsData });
  }, [
    setLoading,
    isLoading,
    setErrors,
    isErrors,
    errors,
    setFetchedData,
    fetchedTimeData,
    fetchedUsersData,
    fetchedSubsData,
    fetchedPaymentsData,
  ]);

  if (import.meta.env.DEV) {
    console.log("fetchedData:", fetchedData);
  }

  return fetchedData;
};

export default useGlobalFetchedData;
