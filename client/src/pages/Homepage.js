import React, { useContext } from "react";
import Card from "../components/Card";
import { Box, Flex } from "@chakra-ui/react";
import { Context } from "../components/Context";
import Pagination_button from "../components/Pagination_button";

export default function Homepage() {
  const { searchValue } = useContext(Context);
  return (
    <Box>
      {searchValue ? (
        <Card />
      ) : (
        <>
          {" "}
          <Card />
          <Pagination_button />
        </>
      )}
    </Box>
  );
}
