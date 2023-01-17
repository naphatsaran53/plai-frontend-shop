import React from "react";
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

const CardPromotion = ({ productname, amount, image, label }: any) => {
  return (
    <Box shadow="md" borderRadius="md" bgColor="#302f2f">
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
            src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN109.jpeg?1660638805"
          />
        </Link>
        <Button
          variant="outline"
          position="absolute"
          color="white"
          size="sm"
          bottom={2}
          right={2}
          p={0}
        >
          <Icon as={FaRegHeart} />
        </Button>
      </Box>
      <Box p={1}>
        <Text color="gold" fontSize={16} fontWeight="bold" h="50px">
          {productname}
        </Text>
        <Text color="white" fontSize={16}>
          ราคา
          <Text as="span" mx={1} fontWeight="bold" color="orange">
            {amount}
          </Text>
          บาท
        </Text>

        {/* <SimpleGrid mt={2} columns={2} spacing={1}>
          <Button colorScheme="green" size="sm">
            ซื้อ
          </Button>
          <Link href="/product/1">
            <Button colorScheme="yellow" w="full" size="sm">
              รายละเอียด
            </Button>
          </Link>
        </SimpleGrid> */}
      </Box>
    </Box>
  );
};

export default CardPromotion;
