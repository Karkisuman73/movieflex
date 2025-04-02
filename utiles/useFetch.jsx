"use client"
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BaseUrl="https://api.themoviedb.org/3";

    const headers = {
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGQ0OWZkNGIwOGE3NDc1ODZjNWZkMjBiNjFhMTZjYSIsIm5iZiI6MTc0MzQ4ODEwOC41MTIsInN1YiI6IjY3ZWI4NDZjZDc2YzE1OWExNWZiMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMKZOC9YyTBK0_7ZnnUiS3gjgBpKkvP2s6M5nDlQK_E"

    }


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BaseUrl}${url}`,{headers});
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
