import Link from "next/link";
import moment from "moment";

import { Box, Image, Text } from "@chakra-ui/react";

const CardArticleVertical = ({
  id,
  articledetail,
  articlehead,
  articledate,
  articlepic,
}: any) => {
  return (
    <Box mb={4}>
      <Link href="/article/[id]" as={`/article/${id}`}>
        <Image
          objectFit="cover"
          w="full"
          borderRadius="md"
          h={160}
          alt="test"
          src="https://my.kapook.com/rq/580/435/50/imagescontent/mobile_web/245/m_262456_3855.png"
          shadow="sm"
        />
        <Text fontWeight="bold" color="gold" fontSize={16}>
          {articlehead}
        </Text>
      </Link>

      <Text h={"46px"} overflow="hidden" color="whitesmoke" fontSize={14}>
        {articledetail}
      </Text>
      <Text fontSize={14} color="green.200">
        {moment(articledate).format("MM-DD-YYYY, h:mm a")}
      </Text>
    </Box>
  );
};

export default CardArticleVertical;
