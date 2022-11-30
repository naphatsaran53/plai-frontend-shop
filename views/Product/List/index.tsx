import { Box, Container, Button, Text, SimpleGrid } from "@chakra-ui/react";

import { CardProduct } from "@/components/Card";

function ProductList() {
  const products = [
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN113.jpeg?1662877154",
      label: "แผ่นทองยมราชประทานทรัพย์",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN114.jpeg?1662877234",
      label: "จี้ล๊อกเก็ตท้าวเวสสุวรรณ (ไซส์เล็ก)",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN89.jpeg?1654427514",
      label: "แผ่นทองยมราชประทานทรัพย์",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN109.jpeg?1660638805",
      label: "จี้ล๊อกเก็ตท้าวเวสสุวรรณ (ไซส์เล็ก)",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN90.jpeg?1654427550",
      label: "จี้ล๊อกเก็ตท้าวเวสสุวรรณ (ไซส์ใหญ่)",
      price: 499,
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "องค์ท้าวเวสสุวรรณ (สีดำทอง ขนาด 3 นิ้ว)",
      price: 499,
    },
  ];

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={8}>
        <Text fontSize={26} mb={2} color="teal" fontWeight="bold">
          สินค้าหมวดมู่งานพิธีการ
        </Text>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={3}>
          {products.map((item, index) => (
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
