import { useState, useEffect } from "react";

const useFetchQuotes = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetchQuotes;
