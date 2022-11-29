import {
  Box,
  Image,
  Text,
  Container,
  Flex,
  Icon,
  Textarea,
  Avatar,
  SimpleGrid,
  Button,
  Badge,
} from "@chakra-ui/react";
import { FaRegStar, FaStar, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

function ProductDetail() {
  const products = [
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

  const CardProduct = ({ label, image, price }: any) => {
    return (
      <Box shadow="md" borderRadius="md" bgColor="white">
        <Box h="120px" position="relative">
          <Link href="/product/1">
            <Image
              position="absolute"
              w="full"
              h="full"
              objectFit="cover"
              alt="test"
              borderTopLeftRadius="md"
              borderTopRightRadius="md"
              src={image}
            />
          </Link>
          <Badge position="absolute" colorScheme="green" top={2} right={2}>
            {price} บาท
          </Badge>
        </Box>
        <Box p={1}>
          <Text color="teal" fontSize={14} fontWeight="bold">
            {label}
          </Text>
          <SimpleGrid mt={2} columns={2} spacing={1}>
            <Button colorScheme="green" size="sm">
              ซื้อ
            </Button>
            <Link href="/product/1">
              <Button colorScheme="yellow" size="sm">
                รายละเอียด
              </Button>
            </Link>
          </SimpleGrid>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxW="6xl" mt={4}>
      <Box bgColor="white" borderRadius="md" py={8} px={10}>
        <SimpleGrid columns={{ base: 2 }} spacing={4}>
          <Box>
            <Image
              mx="auto"
              w="300px"
              alt="test"
              src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN54.jpeg?1651047803"
            />
            <SimpleGrid mt={4} columns={{ base: 4 }} spacing={4}>
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN54.jpeg?1651047803"
              />
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN50.jpeg?1651034954"
              />
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN58.jpeg?1651200021"
              />
              <Image
                w="full"
                alt="test"
                src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN114.jpeg?1662877234"
              />
            </SimpleGrid>
          </Box>
          <Box>
            <Text fontSize={24} color="teal">
              องค์ท้าวเวสสุวรรณ (สีดำทอง ขนาด 3 นิ้ว)
            </Text>
            <Flex align="center" mt={3}>
              <Icon as={FaStar} />
              <Icon as={FaStar} />
              <Icon as={FaRegStar} />
              <Icon as={FaRegStar} />
              <Icon as={FaRegStar} />
              <Text ml={3} fontSize={16}>
                234 Rating
              </Text>
            </Flex>

            <Text mt={3} fontSize={14} color="teal">
              เดือนกันยายน ปลายฝนต้นหนาว ที่อาจทำให้รักอุ่นละมุน หรือร้าวราน
              เพราะจากดาวศุกร์ ดาวแห่งความรัก ความสุข ได้โคจรมาสถิต ณ
              เขตราศีสิงห์ ราศีธาตุไฟ ไฟที่ให้พลังงาน
              และความอบอุ่นอย่างสม่ำเสมอกับคนที่อยู่ชิดใกล้ ขณะที่ดาวอังคาร
              ดาวประจำตัวของชาวราศีเมษ
            </Text>
            <Text fontSize={20} mt={8}>
              ราคา 499 บาท
            </Text>
            <Box mt={100}>
              <Button colorScheme="teal" mr={2} mt={2}>
                ซื้อสินค้า
              </Button>
              <Button colorScheme="red" variant="outline" mt={2}>
                <Icon as={FaRegHeart} />
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Text mt={6} fontWeight="bold" fontSize={28}>
        คะแนนของสินค้า
      </Text>
      <Box mb={2} bgColor="white" textAlign="right" p={4} borderRadius="md">
        <Textarea placeholder="เขียนรีวิวสินค้า" />
        <Button colorScheme="teal" mt={2}>
          รีวิวสินค้า
        </Button>
      </Box>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Box mb={2} key={index} bgColor="white" p={4} borderRadius="md">
          <Flex align="center">
            <Avatar name="Worawut Niamsiri" size="sm" />
            <Box ml={2}>
              <Text fontSize={14}>Worawut Niamsiri</Text>
              <Text fontSize={14}>
                <Icon as={FaStar} />
                <Icon as={FaStar} />
                <Icon as={FaRegStar} />
                <Icon as={FaRegStar} />
                <Icon as={FaRegStar} />
              </Text>
            </Box>
          </Flex>
          <Flex ml="40px" align="center" mt={2}>
            สินค้าดี ส่งไว คุ้มกับราคา ยอดเยี่ยม แพ็คของแน่นหนา
            สิค้ามีคุณภาพใส่ใจ ราคาดีงาม ตรงปก
          </Flex>
        </Box>
      ))}
      <Text mt={6} fontWeight="bold" fontSize={28}>
        สินค้าใกล้เคียง
      </Text>
      <SimpleGrid mt={4} columns={{ base: 1, md: 6 }} spacing={3}>
        {products.map((item, index) => (
          <Box key={index}>
            <CardProduct {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProductDetail;
