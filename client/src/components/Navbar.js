import {
  Container,
  Box,
  Button,
  HStack,
  Image,
  Input,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; // Import the HamburgerIcon
import { useContext } from "react";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            visibility={["visible", "visible", "visible", "visible"]}
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
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <Button
              onClick={() => navigate("/create-user")}
              color="#fff"
              rounded="md"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}>
              Create User
            </Button>
            <Button
              onClick={() => navigate("/team")}
              color="#fff"
              rounded="md"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}>
              Your Team
            </Button>
          </HStack>
          {/* HamburgerIcon for mobile */}
          <Button
            display={{ base: "flex", md: "none" }} // Show on small screens, hide on medium and larger screens
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            _hover={{ bg: "#f6f6f6" }}>
            <HamburgerIcon boxSize={6} />
          </Button>
        </HStack>
        {/* Conditional rendering for the mobile menu */}
        {isOpen && (
          <Box mt={4}>
            <Button
              onClick={() => navigate("/create-user")}
              color="#fff"
              w="100%"
              rounded="md"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}
              mb={2}>
              Create User
            </Button>
            <Button
              onClick={() => navigate("/team")}
              color="#fff"
              w="100%"
              rounded="md"
              bg="#3b49df"
              _hover={{ bg: "#323ebe" }}>
              Your Team
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
