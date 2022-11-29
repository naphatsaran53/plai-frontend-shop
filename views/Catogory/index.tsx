import {
  Box,
  Flex,
  Image,
  Container,
  Button,
  Text,
  Spacer,
  Grid,
  GridItem,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

const Catogory = () => {
  const categories = [
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN89.jpeg?1654427514",
      label: "งานพิธีกิจกรรม",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN109.jpeg?1660638805",
      label: "วัตถุมงคลท่านยม",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN90.jpeg?1654427550",
      label: "แก้ของเสริมดวง",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "ดูดวงงานตรวจ",
    },
  ];

  const CardCategory = ({ label, image }: any) => {
    return (
      <Box
        textAlign="center"
        shadow="md"
        borderRadius="md"
        bgColor="white"
        h={120}
        position="relative"
      >
        <Image
          h="full"
          w="full"
          alt="test"
          borderRadius="md"
          position="absolute"
          src={image}
        />
        <Text
          mt={12}
          w="full"
          mx="auto"
          position="absolute"
          fontWeight="bold"
          color="white"
        >
          {label}
        </Text>
      </Box>
    );
  };
  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={8}>
        <Text fontSize={26} mb={2} color="teal" fontWeight="bold">
          หมวดหมู่สินค้า
        </Text>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
          {categories.map((item, index) => (
            <Box key={index} textAlign="center">
              <CardCategory {...item} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Catogory;
