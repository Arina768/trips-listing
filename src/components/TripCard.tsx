import * as React from "react";
import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Trip } from "../types";
import TripRating from "./TripRating";
import { formatWeight } from "../utils";

type TripCardProps = {
  tripData: Trip;
};

const TripCard: React.FC<TripCardProps> = (props) => {
  const { tripData } = props;

  return (
    <Box borderWidth="10px" borderColor="#FFFFFF" borderRadius="xl" boxShadow="xl">
      <Card
        backgroundImage={`url(${tripData.photoUrl})`}
        backgroundSize="cover"
        align="center"
        position="relative"
        overflow="hidden"
        color="#FFFFFF"
        borderRadius="xl"
        height="100%"
        boxShadow="none"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          background="linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
          zIndex={0}
          opacity="55%"
        />
        <CardHeader display="flex" flexDirection="column" alignItems="center" zIndex={1} pt={8}>
          <Heading size="md" as="h3" textAlign="center">
            {tripData.title}
          </Heading>
          <Text fontSize="sm">{`${tripData.countries.length} Countries, ${tripData.days} Days`}</Text>
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          gap={6}
          zIndex={1}
          py={2}
        >
          <ChakraLink
            as={ReactRouterLink}
            to={`trip/${tripData.id}`}
            backgroundColor="#4066bd"
            color="#FFFFFF"
            w="50%"
            padding="0.6rem 1rem"
            borderRadius="lg"
            textAlign="center"
          >
            Learn more
          </ChakraLink>
          <Flex justifyContent="space-between" bgColor="#151a2e" borderRadius="xl" p={3} fontSize="sm" w="100%">
            <Text>Emissions offset:</Text>
            <Text>{`${formatWeight(tripData.co2kilograms)} CO\u2082e`}</Text>
          </Flex>
        </CardBody>
        <CardFooter bgColor="#FFFFFF" p={3} borderTopRadius="xl" w="90%" color="#000000" zIndex={1}>
          <TripRating rating={tripData.rating} />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default TripCard;
