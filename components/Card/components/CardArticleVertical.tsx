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
        <Text fontWeight="bold" color="white" fontSize={16}>
          {title}
        </Text>
      </Link>
      <Text h={"46px"} overflow="hidden" color="teal" fontSize={14}>
        {subTitle}
      </Text>
      <Text fontSize={14}>วันที่โพสต์ 20 พ.ค. 2562</Text>
    </Box>
  );
};

export default CardArticleVertical;
