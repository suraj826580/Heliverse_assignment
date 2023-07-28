import {
  Avatar,
  Badge,
  Box,
  Center,
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function YourTeam() {
  let TeamMembers = JSON.parse(localStorage.getItem("teamMember")) || [];

  const deletefun = (id) => {
    TeamMembers = TeamMembers.filter((item) => item._id != id);
    localStorage.setItem("teamMember", JSON.stringify(TeamMembers));
    window.location.reload();
  };

  return (
    <Box>
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
        {TeamMembers.length > 0 ? (
          TeamMembers?.map((item) => {
            return (
              <GridItem key={Math.random()}>
                <Center>
                  <Box
                    maxW={"320px"}
                    w={"full"}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    px={30}
                    py={10}
                    textAlign={"center"}>
                    <Avatar
                      size={"xl"}
                      src={item.avatar}
                      mb={4}
                      pos={"relative"}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: "green.300",
                        border: "2px solid white",
                        rounded: "full",
                        pos: "absolute",
                        bottom: 0,
                        right: 3,
                      }}
                    />
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {item.first_name + " " + item.last_name}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} mb={4}>
                      {item.email}
                    </Text>
                    <Stack>
                      <Badge color={"blue.400"}> Gender : {item.gender}</Badge>
                      <Badge color={"blue.400"}> Domain : {item.domain}</Badge>
                      <Badge color={"blue.400"}>
                        {" "}
                        Available : {item.available ? "True" : "False"}
                      </Badge>
                    </Stack>
                    <Stack mt={8} direction={"row"} spacing={4}>
                      <Button
                        onClick={() => deletefun(item._id)}
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "blue.500",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}>
                        Delete User
                      </Button>
                    </Stack>
                  </Box>
                </Center>
              </GridItem>
            );
          })
        ) : (
          <GridItem colSpan={3}>
            <Heading textAlign={"center"}>No one in your Team</Heading>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
}
