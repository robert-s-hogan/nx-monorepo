import { useState, useEffect } from 'react';

const useMergedData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mergeDatasets');
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useMergedData;
