import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { FetchTripsResponse, Trip } from "../types";

const BASE_URL = "/api/trips";

const useFetchTrips = () => {
  const [page, setPage] = useState<number>(1);
  const [trips, setTrips] = useState<Trip[]>([]);
  const url = `${BASE_URL}/?page=${page}`;
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, loading, error } = useFetch<FetchTripsResponse>(url);

  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "An error occurred",
        description: "An error occurred while loading trips",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [error]);

  useEffect(() => {
    if (data && data["trips"]) {
      setTrips((prevValue) => [...prevValue, ...data["trips"]]);
    }
  }, [data]);

  const fetchMoreTrips = () => {
    if (data && page + 1 > data["totalPages"]) {
      setHasMore(false);
      return;
    }
    setPage((prevValue) => prevValue + 1);
  };

  return { trips, loading, error, fetchMoreTrips, hasMore };
};

export default useFetchTrips;
