import { Box, Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import * as React from "react";
import { FaEarthAfrica, FaRegFlag, FaSuitcase, FaPeopleGroup } from "react-icons/fa6";
import { Advantage } from "../types";

const icons = [FaRegFlag, FaEarthAfrica, FaSuitcase, FaPeopleGroup];

type TripAdvantagesProps = {
  advantages: Advantage[];
};

const TripAdvantages: React.FC<TripAdvantagesProps> = (props) => {
  const { advantages } = props;
  return (
    <SimpleGrid minChildWidth="300px" spacing="20px" pb={6}>
      {advantages.map((advantage, index) => (
        <Flex gap={4} key={advantage.title}>
          <Icon as={icons[index]} boxSize={6} />
          <Box>
            <Heading as="h4" size="sm" fontWeight="semibold" mb={2}>
              {advantage.title}
            </Heading>
            <Text fontSize="sm" color="#45474a">
              {advantage.description}
            </Text>
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default TripAdvantages;
