import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // allows us to cancel the fetch
    let isActive = true; // ensures we only update state if component is still on screen

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Could not fetch data");
        const json = await res.json();
        if (isActive) setData(json); // only update if component is still mounted
      } catch (err) {
        if (err.name !== "AbortError" && isActive) {
          setError(err);
        }
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isActive = false; // stop state updates after unmount
      controller.abort(); // cancel fetch if still running
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
