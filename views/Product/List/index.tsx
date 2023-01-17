import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Button, Text, SimpleGrid } from "@chakra-ui/react";

import { CardProduct } from "@/components/Card";

export type Product = {
  data: any;
  productid: number;
  productname: string;
  amount: number;
  slug: string;
};

function ProductList() {
  const [dataProductCategory, setDataProductCategory] = useState<any>([]);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug === "productactivity") {
      axios
        .get(` https://m-plai.eazydevs.com/api/productactivity`)
        .then((response) => {
          setDataProductCategory(response.data.data);
        });
    } else if (slug === "producttanyom") {
      axios
        .get(` https://m-plai.eazydevs.com/api/producttanyom`)
        .then((response) => {
          setDataProductCategory(response.data.data);
        });
    } else if (slug === "producthoro") {
      axios
        .get(` https://m-plai.eazydevs.com/api/producthoro`)
        .then((response) => {
          setDataProductCategory(response.data.data);
        });
    } else if (slug === "productsell") {
      axios
        .get(` https://m-plai.eazydevs.com/api/productsell`)
        .then((response) => {
          setDataProductCategory(response.data.data);
        });
    }
  }, [slug]);

  const nameCategory = () => {
    if (slug === "productactivity") {
      return (
        <Text color="#FFFF" fontWeight="bold" fontSize="22px">
          งานพิธีกิจกรรม
        </Text>
      );
    } else if (slug === "producttanyom") {
      return (
        <Text color="#FFFF" fontWeight="bold" fontSize="22px">
          วัตถุมงคลท่านยม
        </Text>
      );
    } else if (slug === "producthoro") {
      return (
        <Text color="#FFFF" fontWeight="bold" fontSize="22px">
          ดูดวง งานตรวจ
        </Text>
      );
    } else if (slug === "productsell") {
      return (
        <Text color="#FFFF" fontWeight="bold" fontSize="22px">
          แก้ของ เสริมดวง
        </Text>
      );
    }
  };

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={8}>
        <Text>{nameCategory()}</Text>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={3} mt="20px">
          {dataProductCategory.map((item: Product, index: any) => (
            <Box key={index}>
              <CardProduct {...item} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default ProductList;
