import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Link from "next/link";
import { Box, Image, Text } from "@chakra-ui/react";

const CardCategory = ({ label, image, id, slug }: any) => {
  return (
    <Link href="product" as={`/product/${slug}`}>
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
    </Link>
  );
};

export default CardCategory;
