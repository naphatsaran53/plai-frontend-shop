import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "@/pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Badge,
  Button,
  Icon,
  Flex,
  Textarea,
  Avatar,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

const CardDetailProduct = ({
  productname,
  amount,
  productdetails,
  dataSubDetail,
  productid,
  quantity,
}: any) => {
  const router = useRouter();

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
    <Box>
      <Box bgColor="white" borderRadius="md">
        <SimpleGrid columns={{ base: 2 }} spacing={6} mt="20px" p={4}>
          <Box>
            <Image
              mx="auto"
              w="300px"
              alt="test"
              src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN54.jpeg?1651047803"
            />
            <SimpleGrid mt={4} columns={{ base: 4 }} spacing={4}>
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN54.jpeg?1651047803"
              />
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN50.jpeg?1651034954"
              />
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN58.jpeg?1651200021"
              />
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN114.jpeg?1662877234"
              />
            </SimpleGrid>
          </Box>

          <Box>
            <Text fontSize={24} color="teal">
              {productname}
            </Text>
            <Flex align="center" mt={3}>
              <Icon as={FaStar} />
              <Icon as={FaStar} />
              <Icon as={FaRegStar} />
              <Icon as={FaRegStar} />
              <Icon as={FaRegStar} />
              <Text ml={3} fontSize={16}>
                234 Rating
              </Text>
            </Flex>
            <Text mt={3} fontSize={14} color="teal">
              {productdetails}
            </Text>
            <Text fontSize={20} mt={8}>
              ราคา {amount} บาท
            </Text>

            <Flex>
              <Spacer />
              {dataSubDetail.length === 0 ? (
                <Button
                  colorScheme="teal"
                  mr={2}
                  mt={6}
                  onClick={() => handleClickAddCart()}
                >
                  เพิ่มลงตระกร้า
                </Button>
              ) : (
                ""
              )}
            </Flex>
          </Box>
        </SimpleGrid>

        {dataSubDetail.length === 0 ? (
          ""
        ) : (
          <Text mt="30px" ml="20px" fontSize="22px" color="teal">
            เลือกสินค้า
          </Text>
        )}

        <SimpleGrid columns={{ base: 2 }} spacing={6} p={4}>
          {dataSubDetail.map((data: any, index: number) => (
            <Box mt={6} borderRadius="md" key={index}>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem colSpan={{ base: 4, md: 2 }}>
                  <Image
                    mx="auto"
                    w="100%"
                    alt="test"
                    src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN54.jpeg?1651047803"
                  />
                </GridItem>
                <GridItem colSpan={3}>
                  <Box>
                    <Text>{data.productname}</Text>
                    <Text mt="15px" fontSize="18px">
                      ราคา {data.amount} บาท
                    </Text>
                    <Link
                      href="/product/detail/[id]"
                      as={`/product/detail/${data.productid}`}
                    >
                      <Button colorScheme="yellow" w="full" size="sm" mt="20px">
                        รายละเอียด
                      </Button>
                    </Link>
                    <Button
                      colorScheme="teal"
                      mr={2}
                      mt={6}
                      onClick={() => handleClickAddCart()}
                    >
                      เพิ่มลงตระกร้า
                    </Button>
                    <Button colorScheme="red" variant="outline" mt={6}>
                      <Icon as={FaRegHeart} />
                    </Button>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Text mt={12} color="white" fontWeight="bold" fontSize={28}>
        คะแนนของสินค้า
      </Text>
      <Box
        mb={2}
        mt={6}
        bgColor="white"
        textAlign="right"
        p={4}
        borderRadius="md"
      >
        <Textarea placeholder="เขียนรีวิวสินค้า" />
        <Button colorScheme="teal" mt={2}>
          รีวิวสินค้า
        </Button>
      </Box>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Box mb={2} key={index} bgColor="white" p={4} borderRadius="md">
          <Flex align="center">
            <Avatar name="Worawut Niamsiri" size="sm" />
            <Box ml={2}>
              <Text fontSize={14}>Worawut Niamsiri</Text>
              <Text fontSize={14}>
                <Icon as={FaStar} />
                <Icon as={FaStar} />
                <Icon as={FaRegStar} />
                <Icon as={FaRegStar} />
                <Icon as={FaRegStar} />
              </Text>
            </Box>
          </Flex>
          <Flex ml="40px" align="center" mt={2}>
            สินค้าดี ส่งไว คุ้มกับราคา ยอดเยี่ยม แพ็คของแน่นหนา
            สิค้ามีคุณภาพใส่ใจ ราคาดีงาม ตรงปก
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default CardDetailProduct;
