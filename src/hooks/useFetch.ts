import { useState, useEffect } from "react";

type CacheType = {
  [key: string]: any;
};

const cache: CacheType = {};

interface UseFetchResult<TResponse> {
  data: TResponse | null;
  loading: boolean;
  error: boolean;
}

const useFetch = <TResponse>(url: string): UseFetchResult<TResponse> => {
  const [data, setData] = useState<TResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        if (cache[url]) {
          const cachedData = cache[url];
          setData(cachedData);
          return;
        }
        try {
          setLoading(true);
          setError(false);
          const response = await fetch(url);
          if (response.ok) {
            const responseData = await response.json();
            cache[url] = responseData;
            setData(responseData);
          }
        } catch (e) {
          setError(true);
          console.error(e);
        } finally {
          setLoading(false);
        }
      }
    };

    if (!url) return;
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
