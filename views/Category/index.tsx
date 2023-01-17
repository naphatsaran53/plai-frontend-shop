import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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

import { CardCategory } from "@/components/Card";

const Category = () => {
  let productactivity: any;
  let producttanyom: any;
  let producthoro: any;
  let productsell: any;

  const categories = [
    {
      slug: "productactivity",
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "งานพิธีกิจกรรม",
    },
    {
      slug: "producttanyom",
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "วัตถุมงคลท่านยม",
    },
    {
      slug: "producthoro",
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "ดูดวง งานตรวจ",
    },
    {
      slug: "productsell",
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "แก้ของ เสริมดวง",
    },
  ];

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={8}>
        <Text fontSize={26} mb={2} color="white" fontWeight="bold">
          หมวดหมู่สินค้า
        </Text>
        <Box bgColor="#302f2f" mt={4} p="20px" borderRadius="lg">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
            {categories.map((item, index) => (
              <Box key={index} textAlign="center">
                <CardCategory {...item} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
};

export default Category;
