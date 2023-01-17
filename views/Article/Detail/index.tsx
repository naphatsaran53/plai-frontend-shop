import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

import {
  Box,
  Image,
  Text,
  Container,
  Flex,
  Spacer,
  TextProps,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
} from "react-share";

import { CardArticleVertical } from "@/components/Card";

export type Article = {
  data: any;
  id: number;
  articledate: string;
  articledetail: string;
  articlehead: string;
  articlepic: string;
  updatedat: string;
  createdat: string;
  dateToFormat: any;
};

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [articleDetail, setArticleDetail] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);

  // const [article, setArticle] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      if (!loaded) {
        axios
          .get(`https://m-plai.eazydevs.com/api/articledetail/${id}`)
          .then((response) => {
            setArticleDetail(response.data.data);
            console.log(response.data.data);
          });
      }
    }
  }, [router, loaded]);

  const contentStyle: TextProps = {
    fontSize: 18,
    marginBottom: 8,
    whiteSpace: "pre-wrap",
    color: "white",
  };

  return (
    <Container maxW="6xl" mt={4}>
      {articleDetail.map((item: Article, index: any) => (
        <Box key={index} textAlign="center">
          <Text color="white">{item.articlehead}</Text>
          <Image
            mt={6}
            mb={8}
            mx="auto"
            w="600px"
            alt="test"
            src="https://my.kapook.com/rq/580/435/50/imagescontent/mobile_web/245/m_262456_3855.png"
          />

          <Box bg="white" borderRadius={20} padding={20} mt="20px">
            <Text color="teal" fontSize={16}>
              {item.articledetail}
            </Text>

            <Flex mt="20px">
              <Text fontSize={16} mr="20px">
                วันที่โพส :
              </Text>
              {moment(item.articledate).format("MM-DD-YYYY, h:mm a")}
              <Spacer />
            </Flex>

            <Flex mt="20px">
              <Text fontSize={16} mr="20px">
                วันที่อัพเดต :
              </Text>
              <Text fontSize={16}>
                {moment(item.updatedat).format("MM-DD-YYYY, h:mm a")}
              </Text>
              <Spacer />
            </Flex>

            <Flex align="center" mt="20px">
              <Spacer />
              <Flex mr={1}>
                <FacebookShareButton url="">
                  <FacebookIcon size={28} round />
                </FacebookShareButton>
              </Flex>
              <Flex mr={1}>
                <FacebookMessengerShareButton url="" appId="">
                  <FacebookMessengerIcon size={28} round />
                </FacebookMessengerShareButton>
              </Flex>
              <Flex>
                <TwitterShareButton url="">
                  <TwitterIcon size={28} round />
                </TwitterShareButton>
              </Flex>
            </Flex>
          </Box>
        </Box>
      ))}

      <Box mt={4}>
        <Box mb={6}>
          <Text fontWeight="bold" fontSize={28} color="white">
            บทความแนะนำ
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {/* {article.map((item: Article, index: any) => (
            <CardArticleVertical {...item} key={index} />
          ))} */}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ArticleDetail;
