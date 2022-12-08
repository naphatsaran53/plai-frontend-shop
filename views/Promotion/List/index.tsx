import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

import { CardArticleVertical } from "@/components/Card";

function ArticleList() {
  const article2 = [
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN89.jpeg?1654427514",
      title: "จี้ล๊อกเก็ตท้าวเวสสุวรรณ (ไซส์เล็ก)",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN109.jpeg?1660638805",
      title: "ล็อกเก็ตตั้งโต๊ะ องค์พญามหาเทพยมราช",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN42.jpeg?1651026864",
      title: "ท่านยม ปางสี่ทิศจตุโลกบาล ​(ขนาด 9 นิ้ว)",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN50.jpeg?1651034954",
      title: "เหรียญพระพรหม พระยม",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN51.jpeg?1651047424",
      title: "เหรียญท่านยม ปางปราบมาร ลงยา",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN58.jpeg?1651200021",
      title: "เหรียญพระยม ปางอัครทรัพย์ ประจำวัน",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes",
    },
  ];

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text fontWeight="bold" color="white" fontSize={28}>
          โปรโมชั่นทั้งหมด
        </Text>
      </Box>
      <Box bgColor="#302f2f" mt={4} p="20px" borderRadius="lg">
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
