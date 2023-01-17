import React from "react";
import {
  Box,
  Image,
  Flex,
  Container,
  Button,
  Text,
  Spacer,
  Grid,
  GridItem,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import CardHowtoBuy from "@/components/Card/components/CardHowtoBuy";

function Howto_Buy() {
  const howtobuy = [
    {
      label: "ขั้นตอนที่ 1",
      howto: "สมัครสมาชิก",
      image: "image/create_account.png",
    },
    {
      label: "ขั้นตอนที่ 2",
      howto: "เข้าสู่ระบบ",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 3",
      howto: "เลือกหมวดหมู่สินค้า",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 4",
      howto: "เลือกสินค้าที่ต้องการ",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 5",
      howto: "กดสั่งซื้อสินค้า",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 6",
      howto: "เลือกจำนวนสินค้า",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 7",
      howto: "ยืนยันคำสั่งซื้อ",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 8",
      howto: "แจ้งชำระเงิน",
      image: "image/login.png",
    },
    {
      label: "ขั้นตอนที่ 9",
      howto: "กดยืนยันการชำระเงิน",
      image: "image/login.png",
    },
  ];

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={28} color="#FFFF">
          วิธีการสั่งซื้อ
        </Text>
      </Box>

      <Box bgColor="#302f2f" mt={4} p="20px" borderRadius="lg">
        {howtobuy.map((item, index) => (
          <Box key={index} textAlign="center">
            <CardHowtoBuy {...item} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Howto_Buy;
