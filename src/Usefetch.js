import { useState, useEffect } from "react";

const useFetchQuotes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendReq = () => {
    setLoading(true);

    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); }
        return response.json(); })
      .then((result) => {
        const mydata = {
        first_name :"talal",
        last_name : "ilyas",
        grade :  "54",
        score : "12.3",
        teacher_name: "Amjad",
        email: "talailyas@gmail.com",
        gender : "male"}
        const addmydata = {
          first_name :"tahir",
          last_name : "ilyas",
          grade :  "54",
          score : "12.3",
          teacher_name: "Amjad",
           email: "talailyas@gmail.com",
           gender : "male" ,
           country :"pakistan  "
          }
          const merge = { 
            ...addmydata,
             country : "dubai"
          }
          console.log(merge,"-----hello---")

          setData([mydata,merge,...result])
          console.log(mydata,"-------hello-----")
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
