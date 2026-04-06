import { useEffect } from "react";
import useFetchedGenerateData from "./useFetchedGenerateData.js";
import fetchedGenerateEvents from "./useFetchedGenerateEvents.js";
import useStoreFetchedData from "../../../store/useStoreFetchedData.js";

const useGlobalFetchedData = () => {
  // Data
  const {
    isDataLoading, // boolean
    dataErrors, // []
    timeData, // []
    usersData, // []
    subsData, // []
    paymentsData, // []
  } = useFetchedGenerateData();

  // Events
  const {
    isEventsLoading, // boolean
    eventsErrors, // []
    usersEvents, // []
    subsEvents, // []
    paymentsEvents, // []
  } = fetchedGenerateEvents();

  // Data and Events

  const fetchedData = useStoreFetchedData((state) => state.fetchedData);
  const setFetchedData = useStoreFetchedData((state) => state.setFetchedData);
  const fetchedEvents = useStoreFetchedData((state) => state.fetchedEvents);
  const setFetchedEvents = useStoreFetchedData(
    (state) => state.setFetchedEvents,
  );

  const hasErrors = (arr) => Array.isArray(arr) && arr.length > 0;

  useEffect(() => {
    setFetchedData({
      isDataLoading,
      dataErrors,
      timeData,
      usersData,
      subsData,
      paymentsData,
    });

    setFetchedEvents({
      isEventsLoading,
      eventsErrors,
      usersEvents,
      subsEvents,
      paymentsEvents,
    });
  }, [
    // Data
    isDataLoading,
    dataErrors,
    setFetchedData,
    timeData,
    usersData,
    subsData,
    paymentsData,
    // Events
    isEventsLoading,
    eventsErrors,
    setFetchedEvents,
    usersEvents,
    subsEvents,
    paymentsEvents,
  ]);

  const isDataAndEventsLoading =
    fetchedData.isDataLoading || fetchedEvents.isEventsLoading;

  const dataAndEventsErrors = [
    ...fetchedData.dataErrors,
    ...fetchedEvents.eventsErrors,
  ];

  const isDataAndEventsErrors = hasErrors(dataAndEventsErrors);

  const globalStatus = {
    isDataAndEventsLoading,
    isDataAndEventsErrors,
    dataAndEventsErrors,
  };

  return { globalStatus, fetchedData, fetchedEvents };
};

export default useGlobalFetchedData;
