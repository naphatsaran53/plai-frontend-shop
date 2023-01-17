import {
  Box,
  Image,
  Button,
  Text,
  SimpleGrid,
  Container,
  Flex,
} from "@chakra-ui/react";

const CardHowtoBuy = ({ label, howto, image }: any) => {
  return (
    <Container maxW="6xl" mt={4}>
      <Box bgColor="#302f2f" mt={4} p="20px" borderRadius="lg">
        <Box color="#FFFF">
          <Flex>
            <Text>{label}</Text>
            <Text ml="15px">{howto}</Text>
          </Flex>
          <Image
            mt={6}
            mx="auto"
            w="100%"
            borderRadius="md"
            alt="test"
            src={image}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CardHowtoBuy;
