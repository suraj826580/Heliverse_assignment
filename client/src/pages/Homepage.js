import React, { useContext } from "react";
import Card from "../components/Card";
import { Box, Flex } from "@chakra-ui/react";
import { Context } from "../components/Context";
import Pagination_button from "../components/Pagination_button";
import Filter from "../components/Filter";

export default function Homepage() {
  const { searchValue } = useContext(Context);
  return (
    <Box>
      {searchValue ? (
        <Card />
      ) : (
        <Box display={["block", "block", "block", "flex"]}>
          <Box flex={1}>
            <Filter />
          </Box>
          <Box flex={5}>
            <Card />
            <Pagination_button />
          </Box>
        </Box>
      )}
    </Box>
  );
}
