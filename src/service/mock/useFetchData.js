import { useState, useEffect } from "react";

const useFetchData = (dataType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log({ data, loading, error });

  useEffect(() => {
    setLoading(true);
    setError(null);

    const randomErr = Math.random() - 0.5;

    const timer = setTimeout(() => {
      if (randomErr >= 0) {
        setData(dataType);
        setLoading(false);
      } else {
        setError("Data loading failed");
        setLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [dataType]);

  console.log({ data, loading, error });
  return { data, loading, error };
};

export default useFetchData;
