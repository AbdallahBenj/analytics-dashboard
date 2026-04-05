import { useState, useEffect } from "react";
import useStoreRetryState from "../../store/useStoreRetryState";

const useFetchData = (dataType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { retryCount } = useStoreRetryState();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        let isSuccess = Math.random() >= 0.1;

        if (isMounted) {
          if (isSuccess) setData(dataType);
          else setError("failed to load");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => (isMounted = false);
  }, [dataType, retryCount]);

  return { data, loading, error };
};

export default useFetchData;
