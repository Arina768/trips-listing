import { Box, Flex, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

interface TripRatingProps {
  rating: number;
}

const TripRating: React.FC<TripRatingProps> = ({ rating }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" p={0} w="100%" fontWeight="semibold">
      <Text mr={2}>Trip rating</Text>
      <Flex alignItems="center">
        <Box mt="-2px">
          <StarRatings
            rating={rating}
            starRatedColor="#f7d039"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
        </Box>
        <Text ml={2}>{rating}</Text>
      </Flex>
    </Flex>
  );
};

export default TripRating;
