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
    <Box minH={"100vh"}>
      {!loading ? (
        <>
          {" "}
          <Grid
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(3,1fr)",
            ]}
            width={"90%"}
            py={10}
            px={5}
            gap={10}
            margin={"auto"}>
            {data.data?.length <= 0 ? (
              <GridItem colSpan={4}>
                <Heading textAlign={"center"}>Not Found</Heading>
              </GridItem>
            ) : (
              data.data?.map((item, index) => {
                return (
                  <GridItem
                    key={index}
                    boxShadow={"3px 3px 5px 2px gray"}
                    borderRadius={"10px"}>
                    <Box maxW="sm" p={4} h={"100%"} shadow="md">
                      <Flex
                        justifyContent={"space-evenly"}
                        alignItems={"center"}>
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
