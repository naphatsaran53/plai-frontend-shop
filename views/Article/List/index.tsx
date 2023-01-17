import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { CardArticleVertical } from "@/components/Card";

export type Article = {
  data: any;
  id: number;
  articledate: string;
  articledetail: string;
  articlehead: string;
  articlepic: string;
};

const ArticleList = () => {
  const [article, setArticle] = useState<any>([]);

  useEffect(() => {
    axios.post("https://m-plai.eazydevs.com/api/article").then((response) => {
      setArticle(response.data.data);
    });
  }, []);

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text fontWeight="bold" color="white" fontSize={28}>
          บทความทั้งหมด
        </Text>
      </Box>
      <Box bgColor="#302f2f" mt={4} p="20px" borderRadius="lg">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {article.map((item: Article, index: any) => (
            <CardArticleVertical {...item} key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ArticleList;
