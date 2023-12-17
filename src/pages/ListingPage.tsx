import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import TripCard from "../components/TripCard";
import useFetchTrips from "../api/useFetchTrips";
import { Trip } from "../types";
import Loader from "../components/Loader";

const ListingPage = () => {
  const {
    trips,
    loading,
    fetchMoreTrips,
    hasMore,
  }: { trips: Trip[]; loading: boolean; fetchMoreTrips: () => void; hasMore: boolean } = useFetchTrips();

  return (
    <Container maxW="container.lg" my={10}>
      {loading && <Loader loaderSize="xl" wrapperHeight="100vh" />}
      {trips && !!trips.length && (
        <InfiniteScroll
          dataLength={trips.length}
          style={{ overflow: "hidden" }}
          next={fetchMoreTrips}
          hasMore={hasMore}
          loader={<Loader loaderSize="lg" />}
        >
          <SimpleGrid minChildWidth="300px" spacing="20px">
            {trips.map((trip) => (
              <TripCard tripData={trip} key={trip.id} />
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      )}
      {!loading && !trips.length && (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Text fontSize="lg">No trips available. Please, try again later</Text>
        </Box>
      )}
    </Container>
  );
};

export default ListingPage;
