import { useState, useEffect } from "react";

const useFetchData = (dataType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        let randomErrV2 = Math.random() >= 0.1;

        if (isMounted) {
          if (randomErrV2) setData(dataType);
          else setError("failed to load");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => (isMounted = false);
  }, [dataType]);

  return { data, loading, error };
};

export default useFetchData;
