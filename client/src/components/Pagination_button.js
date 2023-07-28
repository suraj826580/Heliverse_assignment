import { Button, ButtonGroup, Center } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "./Context";

export default function Pagination_button() {
  const { page, handleSetPage, data } = useContext(Context);
  return (
    <Center mb={10}>
      <ButtonGroup>
        <Button
          color="#fff"
          rounded="md"
          bg="#3b49df"
          _hover={{ bg: "#323ebe" }}
          isDisabled={page <= 1}
          onClick={() => handleSetPage(-1)}>
          Previous
        </Button>
        <Button
          color="#fff"
          rounded="md"
          bg="#3b49df"
          _hover={{ bg: "#323ebe" }}
          isDisabled>
          {page}
        </Button>
        <Button
          color="#fff"
          rounded="md"
          bg="#3b49df"
          _hover={{ bg: "#323ebe" }}
          isDisabled={data.totalPages == page}
          onClick={() => handleSetPage(1)}>
          Next
        </Button>
      </ButtonGroup>
    </Center>
  );
}
