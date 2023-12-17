import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { Trip } from "../types";

type useFetchTripDetailsArgs = {
  url: string;
};

const useFetchTripDetails = ({ url }: useFetchTripDetailsArgs) => {
  const { data, loading, error } = useFetch<Trip>(url);

  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "An error occurred",
        description: "An error occurred while loading trip details",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [error]);

  return { tripData: data, loading, error };
};

export default useFetchTripDetails;
