import Link from "next/link";

import { Box, Image, Text } from "@chakra-ui/react";

const CardArticleVertical = ({ image, title, subTitle }: any) => {
  return (
    <Box mb={4}>
      <Link href="/article/1">
        <Image
          objectFit="cover"
          w="full"
          borderRadius="md"
          h={160}
          alt="test"
          src={image}
          shadow="sm"
        />
      </Link>
      <Link href="/article/1">
        <Text fontWeight="bold" color="gold" fontSize={16}>
          {title}
        </Text>
      </Link>
      <Text h={"46px"} overflow="hidden" color="whitesmoke" fontSize={14}>
        {subTitle}
      </Text>
      <Text fontSize={14} color="green.200">
        วันที่โพสต์ 20 พ.ค. 2562
      </Text>
    </Box>
  );
};

export default CardArticleVertical;
