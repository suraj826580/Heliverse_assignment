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
  Spinner,
  Button,
  ButtonGroup,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Card() {
  const { data, loading, handleAddTeam } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Box minH={"100vh"} p={2}>
      {!loading ? (
        <>
          {" "}
          <Grid
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(4,1fr)",
            ]}
            width={"90%"}
            py={10}
            px={5}
            gap={10}
            justifyContent={"center"}
            margin={"auto"}>
            {data.data?.length <= 0 ? (
              <GridItem colSpan={4}>
                <Heading textAlign={"center"}>Not Found</Heading>
              </GridItem>
            ) : (
              data.data?.map((item, index) => {
                return (
                  <GridItem
                    boxShadow={"lg"}
                    key={index}
                    borderRadius={"10px"}
                    p={2}
                    boxSizing="border-box">
                    <Box m={2}>
                      <Flex gap={5} boxSizing={"border-box"}>
                        <VStack gap={2}>
                          <Image
                            src={item.avatar}
                            objectFit={"cover"}
                            alt={`${item.first_name}`}
                          />
                          <Badge borderRadius="full" colorScheme="teal">
                            {item.gender}
                          </Badge>
                        </VStack>
                        <VStack gap={1}>
                          <Box d="flex" alignItems="baseline">
                            <Text fontWeight="semibold">
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
                        </VStack>
                      </Flex>
                      <Center mt={5}>
                        <ButtonGroup>
                          <Button
                            size={"sm"}
                            onClick={() => handleAddTeam(item)}>
                            Add to Team
                          </Button>
                          <Button
                            size={"sm"}
                            onClick={() => navigate(`/${item._id}`)}>
                            More Info
                          </Button>
                        </ButtonGroup>
                      </Center>
                    </Box>
                  </GridItem>
                );
              })
            )}
          </Grid>
          {/* <Pagination_button /> */}
        </>
      ) : (
        <Flex minH={"90vh"} justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </Box>
  );
}
