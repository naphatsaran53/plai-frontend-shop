import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

import { CardArticleVertical } from "@/components/Card";

function ArticleList() {
  const article2 = [
    {
      image:
        "https://my.kapook.com/rq/580/435/50/imagescontent/mobile_web/245/m_262456_3855.png",
      title:
        "ดูดวงความรัก เดือนกันยายน 2565 สำหรับ 12 ราศี ฉบับคนโสดและคนมีคู่",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://my.kapook.com/rq/580/435/50/imagescontent/mobile_web/216/m_262427_4665.png",
      title: "ดูดวงความรัก เดือนสิงหาคม 2565 ทั้งคนโสดและคนมีคู่ 12 ราศี",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://my.kapook.com/rq/580/435/50/imagescontent/mobile_web/206/m_262417_3357.jpg",
      title:
        "ดูดวงความรัก 12 ราศี เดือนกรกฎาคม 2565 โดย อ.มาศฟ้า ยิปซีอินฟินิตี้",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://s359.kapook.com/rq/580/435/50/pagebuilder/a0e28395-47bb-4361-a206-75cc9ab9d4c0.jpg",
      title:
        "ดูดวงความรัก 12 ราศี เดือนมิถุนายน 2565 โดย อ.มาศฟ้า ยิปซีอินฟินิตี้",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
  ];

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text fontWeight="bold" color="white" fontSize={28}>
          รวมบทความทั้งหมด
        </Text>
      </Box>
      <Box mt={10}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {article2.map((item, index) => (
            <CardArticleVertical {...item} key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default ArticleList;
