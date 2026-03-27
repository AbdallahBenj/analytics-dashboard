import { useState, useEffect } from "react";

const useFetchData = (dataType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let randomErr = Math.random() - 0.5;
    randomErr = 1;

    const timer = setTimeout(() => {
      if (randomErr >= 0) {
        setData(dataType);
        setLoading(false);
      } else {
        setError("Data loading failed");
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [dataType]);

  console.log({ data, loading, error });
  return { data, loading, error };
};

export default useFetchData;
