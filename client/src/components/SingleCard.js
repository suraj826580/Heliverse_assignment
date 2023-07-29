import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "./Context";

export default function SingleCard() {
  const navigate = useNavigate();
  const toast = useToast();
  const { id } = useParams();
  const [object, setObject] = useState({});
  const { handleDelete, handleAddTeam } = useContext(Context);

  const deletefun = (id) => {
    handleDelete(id)
      .then((res) => {
        if (res.data.msg == "user deleted") {
          setTimeout(() => {
            navigate("/");
          }, 1000);
          return toast({
            title: `${res.data.msg}`,
            status: "success",
            isClosable: true,
            duration: 1000,
          });
        } else {
          return toast({
            title: `${res.data.msg}`,
            status: "error",
            isClosable: true,
            duration: 1000,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    (() => {
      axios
        .get(`https://heliverse-zp88.onrender.com/users/${id}`)
        .then((res) => {
          setObject(() => res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <Center minH={"80vh"}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        px={30}
        py={10}
        textAlign={"center"}>
        <Avatar
          size={"xl"}
          src={object.avatar}
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
          {object.first_name + " " + object.last_name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {object.email}
        </Text>
        <Stack>
          <Badge color={"blue.400"}> Gender : {object.gender}</Badge>
          <Badge color={"blue.400"}> Domain : {object.domain}</Badge>
          <Badge color={"blue.400"}>
            {" "}
            Available : {object.available ? "True" : "False"}
          </Badge>
        </Stack>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            onClick={() => handleAddTeam(object)}
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
            Add to Team
          </Button>
          <Button
            onClick={() => deletefun(object._id)}
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
  );
}
