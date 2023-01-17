import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  Container,
  SimpleGrid,
  Button,
  Badge,
} from "@chakra-ui/react";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { CardDetailProduct } from "@/components/Card";

export type ProductDetail = {
  data: any;
  productmain: any;
  productsub: any;
  productid: number;
  productname: string;
  productdetails: string;
  descripttion: string;
  amount: number;
};

const ProductDetail = () => {
  const [dataDetail, setdataProductDetail] = useState<any>([]);
  const [dataSubDetail, setdataProductSubDetail] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);

  // const triggerRouteChange = () => {
  //   Router.events.on("routeChangeComplete", () => {
  //     if (router.pathname === "/topic/[slugName]") {
  //       setLoaded(false);
  //     }
  //   });
  // };

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (!loaded) {
        axios
          .get(`https://m-plai.eazydevs.com/api/productdetail/${id}`)
          .then((response) => {
            setdataProductDetail(response.data.productmain[0]);
            setdataProductSubDetail(response.data.productsub);
            console.log(response.data);
            console.log({ id });
            console.log(response.data.productmain[0]);
            console.log(response.data.productsub);
          });
      }
    }
  }, [router, loaded]);

  const NearbyProducts = [
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN89.jpeg?1654427514",
      name: "แผ่นทองยมราชประทานทรัพย์ (ๆซต์เล็ก)",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN109.jpeg?1660638805",
      name: "จี้ล๊อกเก็ตท้าวเวสสุวรรณ (ไซส์เล็ก)",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN90.jpeg?1654427550",
      name: "จี้ล๊อกเก็ตท้าวเวสสุวรรณ (ไซส์ใหญ่)",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      name: "องค์ท้าวเวสสุวรรณ (สีดำทอง ขนาด 3 นิ้ว)",
      price: 499,
    },
  ];

  const CardNearbyProducts = ({ name, image, price }: any) => {
    return (
      <Box shadow="md" borderRadius="md">
        <Box h="120px" position="relative">
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
          <Badge position="absolute" colorScheme="green" top={2} right={2}>
            {price} บาท
          </Badge>
        </Box>
        <Box p={1}>
          <Text color="teal" fontSize={14} fontWeight="bold">
            {name}
          </Text>

          <SimpleGrid mt={2} columns={2} spacing={1}>
            <Button colorScheme="green" size="sm" w="100%">
              ซื้อ
            </Button>
            <Link href="/product/1">
              <Button colorScheme="yellow" size="sm" w="100%">
                รายละเอียด
              </Button>
            </Link>
          </SimpleGrid>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxW="6xl" mt={12}>
      <Text color="white" fontWeight="bold" fontSize={28}>
        รายละเอียดของสินค้า
      </Text>
      <Box>
        <Box>
          <CardDetailProduct {...dataDetail} dataSubDetail={dataSubDetail} />
        </Box>
      </Box>

      <Text mt={12} color="white" fontWeight="bold" fontSize={28}>
        สินค้าใกล้เคียง
      </Text>
      <Box mt="20px" bgColor="white" p={4} borderRadius="md">
        <SimpleGrid mt={4} columns={{ base: 1, md: 4 }} spacing={3}>
          {NearbyProducts.map((item, index) => (
            <Box key={index}>
              <CardNearbyProducts {...item} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ProductDetail;
