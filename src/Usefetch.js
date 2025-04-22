import { useEffect, useState } from 'react';
import { Spin } from 'antd';
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [load,setload] =useState(1)
  // console.log(data,"-----thisis data")

  const fetchData = () => {
    setLoading(true);
    fetch(url)
    .then(response => response.json())
      .then((json) => {
        setData(json);
         
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  console.log(fetchData,"-----------fetch ---------")
  
  useEffect(() => {
    fetchData();
   
    const interval = setInterval(fetchData, 10000); 
    console.log(interval ,"------interval-------")
    setTimeout(() => { 
        clearInterval(interval);
        setLoading(true)
    }, 10000);


   
  }, []);

  return { data, loading, error };
}

export default useFetch;
