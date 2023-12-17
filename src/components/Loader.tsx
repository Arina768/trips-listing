import { Box, Spinner } from "@chakra-ui/react";
import * as React from "react";

type LoaderProps = {
  loaderSize: string;
  wrapperHeight?: string;
};

const Loader: React.FC<LoaderProps> = (props) => {
  const { loaderSize, wrapperHeight } = props;
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={wrapperHeight || "auto"}>
      <Spinner size={loaderSize} color="teal.500" />
    </Box>
  );
};

export default Loader;
