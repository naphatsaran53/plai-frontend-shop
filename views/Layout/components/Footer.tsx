import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  Container,
  Button,
  Text,
  Spacer,
  SimpleGrid,
  TextProps,
  Icon,
} from "@chakra-ui/react";

import { FaFacebookF, FaLine, FaPhone } from "react-icons/fa";

const Footer = () => {
  const headerStyle: TextProps = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "gold",
  };

  const linkStyle: TextProps = {
    fontSize: "14px",
    color: "white",
  };

  const aboutusLinks = [
    {
      label: "สนใจลงโฆษณา",
      link: "/",
    },
    {
      label: "ติดต่อเรา",
      link: "/",
    },
    {
      label: "ร่วมงานกับเรา",
      link: "/",
    },
    {
      label: "เงื่อนไขข้อตกลงการใช้งาน",
      link: "/",
    },
  ];

  const articleLinks = [
    {
      label: "ดูดวงความรักปี 2565",
      link: "/",
    },
    {
      label: "ดูดวงความรักปี 2566",
      link: "/",
    },
    {
      label: "ดูดวงความรักปี 2567",
      link: "/",
    },
    {
      label: "ดูดวงความรักปี 2568",
      link: "/",
    },
  ];

  const productLinks = [
    {
      label: "งานพิธี กิจกรรม",
      link: "/",
    },
    {
      label: "วัตุมงคล",
      link: "/",
    },
    {
      label: "ท่านยม",
      link: "/",
    },
    {
      label: "ดูดวง เสนริมดวง",
      link: "/",
    },
  ];

  const topLocationLinks = [
    {
      label: "ดูดวงตามวันเดือนปีเกิด",
      link: "/",
    },
    {
      label: "ดูดวง ทำนายฝัน",
      link: "/",
    },
    {
      label: "สุ่มเสียมซี",
      link: "/",
    },
  ];

  return (
    <Box bgColor="#302f2f" borderTop="1px solid gold" shadow="sm" p={8}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 2, md: 5 }}>
          <Box>
            <Text {...headerStyle}>เกี่ยวกับเรา</Text>
            {aboutusLinks.map((item, index) => (
              <Link key={index} href="/">
                <Text {...linkStyle}>{item.label}</Text>
              </Link>
            ))}
          </Box>
          <Box>
            <Text {...headerStyle}>บทความ</Text>
            {articleLinks.map((item, index) => (
              <Link key={index} href="/">
                <Text {...linkStyle}>{item.label}</Text>
              </Link>
            ))}
          </Box>
          <Box>
            <Text {...headerStyle}>สินค้ายอดนิยม</Text>
            {productLinks.map((item, index) => (
              <Link key={index} href="/">
                <Text {...linkStyle}>{item.label}</Text>
              </Link>
            ))}
          </Box>
          <Box>
            <Text {...headerStyle}>ดูดวง</Text>
            {topLocationLinks.map((item, index) => (
              <Link key={index} href="/">
                <Text {...linkStyle}>{item.label}</Text>
              </Link>
            ))}
          </Box>
          <Box>
            <Text {...headerStyle}>ติดตามเรา</Text>
            <Link href="/">
              <Button size="sm" mr={1} colorScheme="facebook">
                <Icon as={FaFacebookF} />
              </Button>
            </Link>
            <Link href="/">
              <Button size="sm" mr={1} bgColor="#00b902" color="white">
                <Icon as={FaLine} />
              </Button>
            </Link>
            <Link href="/">
              <Button size="sm" colorScheme="blue">
                <Icon as={FaPhone} />
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
