import {
  Container,
  Box,
  Button,
  HStack,
  Image,
  Input,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";

const IconButton = ({ children }) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: "#f6f6f6" }}>
      {children}
    </Button>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const { handleSearch, searchValue } = useContext(Context);
  return (
    <Box
      py="2"
      boxShadow="sm"
      border="0 solid #e5e7eb"
      top="0"
      bg={useColorModeValue("gray.100", "gray.700")}
      width="100%"
      zIndex="1">
      <Container maxW="1280px" px={4} mx="auto">
        <HStack spacing={4}>
          <Image
            onClick={() => navigate("/")}
            visibility={["hidden", "visible", "visible", "visible"]}
            position={["absolute", "static", "static", "static"]}
            alt="dev logo"
            w={"auto"}
            h={12}
            src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-letter-s-m-games-logo-design-png-image_8466789.png"
          />
          <Input
            maxW="36rem"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search..."
            borderColor={useColorModeValue("gray.300", "white")}
            borderRadius="5px"
            d={{ base: "none", md: "block" }}
          />
          <Spacer />
          <HStack spacing={3}>
            <Button
              onClick={() => navigate("/create-user")}
              color="#fff"
              rounded="md"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}>
              Create User
            </Button>
            <Button
              onClick={() => navigate("/create-user")}
              color="#fff"
              rounded="md"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}>
              Your Team
            </Button>
          </HStack>
        </HStack>
        
      </Container>
    </Box>
  );
};

export default Navbar;
