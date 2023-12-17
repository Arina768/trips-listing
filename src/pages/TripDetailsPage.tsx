import {
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { formatWeight } from "../utils";
import useFetchTripDetails from "../api/useFetchTripDetails";
import Loader from "../components/Loader";
import TripAdvantages from "../components/TripAdvantages";

const TripDetailsPage = () => {
  const { id } = useParams();

  const { tripData, loading } = useFetchTripDetails({
    url: `/api/trip/${id}`,
  });

  return (
    <Container maxW="container.xl" my={10}>
      {loading && <Loader loaderSize="xl" wrapperHeight="100vh" />}
      {tripData && (
        <>
          <ChakraLink as={ReactRouterLink} to="/" textDecoration={"underline"} color="#45474a">
            Go back
          </ChakraLink>
          <Heading size="lg" as="h1" mt={10}>
            {tripData.title}
          </Heading>
          <Text fontSize="sm" pt={2} pb={6} color="#45474a">
            {tripData.subtitle}
          </Text>
          <Flex justifyContent="space-between" direction={{ base: "column", md: "row" }}>
            <Box w={{ base: "100%", md: "60%" }} mb={{ base: 6, md: 0 }}>
              <Image src={tripData.photoUrl} alt={tripData.title} borderRadius="xl" minHeight="250px" />
              <Heading size="md" as="h3" py={6} fontWeight="semibold">
                Overview
              </Heading>
              <TripAdvantages advantages={tripData.advantages} />
              <Divider orientation="horizontal" />
              <Text fontSize="md" pt={6}>
                {tripData.description}
              </Text>
            </Box>
            <Card
              bgColor="#FFFFFF"
              minWidth={{ base: "100%", md: "35%" }}
              mb={{ base: 4, md: 0 }}
              borderRadius="xl"
              height="fit-content"
              color="#45474a"
            >
              <CardBody>
                <Heading as="h3" size="md" color="#000000">{`${tripData.days} days`}</Heading>
                <Text fontSize="sm" pt={2} pb={4}>{`Emissions: ${formatWeight(tripData.co2kilograms)} CO\u2082e`}</Text>
                <Divider orientation="horizontal" />
                <Text fontSize="sm" pt={4}>
                  Countries included:
                </Text>
                <UnorderedList display="flex" flexDirection="column" flexWrap="wrap" height="100px">
                  {tripData.countries.map((country) => (
                    <ListItem key={country}>{country}</ListItem>
                  ))}
                </UnorderedList>
              </CardBody>
            </Card>
          </Flex>
        </>
      )}
      {!loading && !tripData && (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Text fontSize="lg">Information about this trip is temporarily unavailable. Please try again later.</Text>
        </Box>
      )}
    </Container>
  );
};

export default TripDetailsPage;
