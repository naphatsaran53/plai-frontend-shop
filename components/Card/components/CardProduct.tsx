import Link from "next/link";
import {
  Box,
  Image,
  Button,
  Text,
  SimpleGrid,
  Badge,
  Icon,
} from "@chakra-ui/react";

import { FaRegHeart } from "react-icons/fa";

const CardProduct = ({ label, image, price }: any) => {
  return (
    <Box shadow="md" borderRadius="md" bgColor="white">
      <Box h="140px" position="relative">
        <Link href="/product/1">
          <Image
            position="absolute"
            w="full"
            h="full"
            objectFit="cover"
            alt="test"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            src={image}
          />
        </Link>
        <Button position="absolute" size="sm" bottom={2} right={2} p={0}>
          <Icon as={FaRegHeart} />
        </Button>
      </Box>
      <Box p={1}>
        <Text color="teal" fontSize={16} fontWeight="bold" h="50px">
          {label}
        </Text>
        <Text color="teal" fontSize={16}>
          ราคา {price} บาท
        </Text>

        <SimpleGrid mt={2} columns={2} spacing={1}>
          <Button colorScheme="green" size="sm">
            ซื้อ
          </Button>
          <Link href="/product/1">
            <Button colorScheme="yellow" w="full" size="sm">
              รายละเอียด
            </Button>
          </Link>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CardProduct;
