import { useState, useEffect } from "react";

const useFetchQuotes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendReq = () => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        const addmydata = {
          first_name: "Talal",
          last_name: "Ilyas",
          score: 12.3,
          grade: "B",
          teacher_name: "Amjad",
        };

        setData([addmydata, ...result]);
        console.log(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // useEffect(() => {
  //      sendReq()
  // }, [url, trigger]);
  useEffect(() => {
    sendReq();
  }, []);

  return { data, loading, sendReq };
};

export default useFetchQuotes;
