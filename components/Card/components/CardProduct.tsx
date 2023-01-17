import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { DataContext } from "@/pages/_app";

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

const CardProduct = ({ productname, amount, productid }: any) => {
  const { setCartNum } = useContext(DataContext);
  const [addCart, setAddCart] = useState<any>([]);

  const handleClickAddCart = async () => {
    axios
      .post("https://m-plai.eazydevs.com/api/addcart", {
        productid: productid,
        unit: 1,
        lineuid: "U4fd7ba00a8a2f7edb9580139111d2687X",
      })
      .then((response) => {
        setCartNum(response.data.cart);
        setAddCart(response.data);
      });
  };

  return (
    <Box shadow="md" borderRadius="md" bgColor="#302f2f">
      <Box h="140px" position="relative">
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
        <Text color="gold" fontSize={16} fontWeight="bold" h="50px" mt="10px">
          {productname}
        </Text>
        <Text color="white" fontSize={16}>
          ราคา
          <Text as="span" mx={1} fontWeight="bold" color="orange">
            {amount}
          </Text>
          บาท
        </Text>

        <SimpleGrid mt={2} columns={2} spacing={1}>
          <Link href="/cart">
            <Button
              colorScheme="green"
              size="sm"
              w="100%"
              onClick={() => handleClickAddCart()}
            >
              ซื้อ
            </Button>
          </Link>
          <Link href="/product/detail/[id]" as={`/product/detail/${productid}`}>
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
