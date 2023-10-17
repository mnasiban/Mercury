import axios from "axios";
import { useState, useEffect } from "react";

const useReq = (url, type, body) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      try {
        setIsLoading(true);
        if (type == "GET") {
          const { data } = await axios.get(url);
          setResponse(data);
        } else if (type == "POST") {
          const { data } = await axios.post(url, { body });
          setResponse(data);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, []);

  return [response, isLoading];
};

export default useReq;
