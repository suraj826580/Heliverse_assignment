import React, { useContext } from "react";
import { Context } from "./Context";
import {
  Box,
  Grid,
  GridItem,
  Badge,
  Image,
  Text,
  VStack,
  Flex,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
export default function Card() {
  const { data } = useContext(Context);
  return (
    <Box minH={"100vh"}>
      <Grid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        width={"90%"}
        py={10}
        px={5}
        gap={10}
        margin={"auto"}>
        {data.data?.map((item, index) => {
          return (
            <GridItem
              key={index}
              boxShadow={"3px 3px 5px 2px gray"}
              borderRadius={"10px"}>
              <Box maxW="sm" p={4} h={"100%"} overflow="hidden" shadow="md">
                <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                  <VStack justifyContent={"center"} gap={5}>
                    <Image
                      src={item.avatar}
                      objectFit={"cover"}
                      alt={`${item.first_name}`}
                    />
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {item.gender}
                    </Badge>
                  </VStack>
                  <Box>
                    <Box d="flex" alignItems="baseline">
                      <Text fontWeight="semibold" fontSize="xl">
                        {item.first_name} {item.last_name}
                      </Text>
                    </Box>
                    <Box>
                      <Text color="gray.600" fontSize="sm">
                        {item.email}
                      </Text>
                    </Box>
                    <Box>
                      <Text color="gray.600" fontSize="sm">
                        Domain: {item.domain}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        {item.available}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
                <Center mt={5}>
                  <ButtonGroup>
                    <Button size={"sm"}>Add to your team</Button>
                    <Button size={"sm"}>More info</Button>
                  </ButtonGroup>
                </Center>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
      <Center mb={10}>
        <ButtonGroup>
          <Button>Previous</Button>
          <Button>No</Button>
          <Button>Next</Button>
        </ButtonGroup>
      </Center>
    </Box>
  );
}
