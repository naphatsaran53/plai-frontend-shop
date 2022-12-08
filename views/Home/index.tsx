import Slider from "react-slick";
import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  Container,
  Button,
  Text,
  Spacer,
  Grid,
  GridItem,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  CardProduct,
  CardCategory,
  CardArticleVertical,
} from "@/components/Card";

const Home = () => {
  const bannerSettings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i: number) => (
      <div className="slick-dots-custom">
        <div className="dot" />
      </div>
    ),
  };

  const images = [
    "https://s359.kapook.com/config-desktop/33374b4a-451d-43d3-b955-48266ca97cd9.jpg",
    "https://s359.kapook.com/config-desktop/e7e8db29-f3f1-4d59-8eb0-379b0e16b207.jpg",
  ];

  const categories = [
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN89.jpeg?1654427514",
      label: "งานพิธีกิจกรรม",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN109.jpeg?1660638805",
      label: "วัตถุมงคลท่านยม",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN90.jpeg?1654427550",
      label: "แก้ของเสริมดวง",
    },
    {
      image:
        "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN92.jpeg?1654254012",
      label: "ดูดวงงานตรวจ",
    },
  ];

  const article1 = [
    {
      image:
        "https://s.isanook.com/ho/0/rp/rc/w172h97/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hvLzAvdWQvNDgvMjQxNjMzL3Nhbm9va19ob3Jvc2NvcGVfc29jaXR5KDIyKS5qcGc=.jpg",
      title: "ดวงรายสัปดาห์ ช่วง 21 - 27 พ.ย.65 โดย หมอฝ้าย",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes and a bunch of other HTML Pan Ipsum",
    },
    {
      image:
        "https://s.isanook.com/ho/0/rp/rc/w172h97/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hvLzAvdWQvNDgvMjQxNjA1L2NvdmVyX3Nhbm9va19ob3Jvc2NvcGUtMjAyMi5qcGc=.jpg",
      title: "ดวงรายสัปดาห์ ช่วง 21 - 27 พ.ย.65 โดย หมอฝ้าย",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes and a bunch of other HTML Pan Ipsum",
    },
    {
      image:
        "https://s.isanook.com/ho/0/rp/rc/w172h97/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hvLzAvdWQvNDgvMjQxNjA5L3RhZ2xpbmUtdGVtcGxhdGUoNzgpLmpwZw==.jpg",
      title: "ดวงรายสัปดาห์ ช่วง 21 - 27 พ.ย.65 โดย หมอฝ้าย",
      subTitle:
        "Loripsum - The best generator I could find because it optionally includes lists, formatting, blockquotes and a bunch of other HTML Pan Ipsum",
    },
  ];

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

  const CardArticle = ({ image, title, subTitle }: any) => {
    return (
      <Box mb={4} bgColor="#191919" borderRadius="md" shadow="md" h={140}>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={2}>
            <Image
              objectFit="cover"
              w="full"
              borderTopLeftRadius="md"
              borderBottomLeftRadius="md"
              h={140}
              alt="test"
              src={image}
            />
          </GridItem>
          <GridItem colSpan={3} py={1}>
            <Text fontWeight="bold" color="gold" fontSize={16}>
              {title}
            </Text>
            <Text h={"68px"} color="white" fontSize={14} overflow="hidden">
              {subTitle}
            </Text>
            <Text fontSize={14} color="teal">
              วันที่โพสต์ 20 พ.ค. 2562
            </Text>
          </GridItem>
        </Grid>
      </Box>
    );
  };

  return (
    <Container maxW="6xl" mt={4}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={3}>
          <Slider {...bannerSettings}>
            {images.map((item, index) => (
              <Box key={index}>
                <Image
                  objectFit="cover"
                  shadow="md"
                  borderRadius="md"
                  w="full"
                  h={288}
                  src={item}
                  alt={item}
                />
              </Box>
            ))}
          </Slider>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            mb={2}
            shadow="md"
            borderRadius="md"
            objectFit="cover"
            w="full"
            h={140}
            src={
              "https://s359.kapook.com/config-desktop/d3c3b5aa-d069-4e20-953f-2952c35d68c2.jpg"
            }
            alt={
              "https://s359.kapook.com/config-desktop/d3c3b5aa-d069-4e20-953f-2952c35d68c2.jpg"
            }
          />
          <Image
            shadow="md"
            borderRadius="md"
            objectFit="cover"
            w="full"
            h={140}
            src={
              "https://s359.kapook.com/config-desktop/3419c3c1-95cd-44af-960d-0959ccb08b6c.jpg"
            }
            alt={
              "https://s359.kapook.com/config-desktop/3419c3c1-95cd-44af-960d-0959ccb08b6c.jpg"
            }
          />
        </GridItem>
      </Grid>
      <Box mt={8}>
        <Text fontSize={26} mb={2} color="white" fontWeight="bold">
          หมวดหมู่สินค้า
        </Text>
        <Box bgColor="#302f2f" p="20px" borderRadius="lg">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
            {categories.map((item, index) => (
              <Box key={index} textAlign="center">
                <CardCategory {...item} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt={8}>
        <Flex>
          <Text fontSize={26} mb={2} color="white" fontWeight="bold">
            สินค้ายอดนิยม
          </Text>
          <Spacer />
          <Text fontSize={16} textDecorationLine="underline" mb={2}>
            ดูทั้งหมด
          </Text>
        </Flex>
        <Box bgColor="#302f2f" p="20px" borderRadius="lg">
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={3}>
            {products.map((item, index) => (
              <Box key={index}>
                <CardProduct {...item} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Text fontSize={26} mb={2} mt={10} color="white" fontWeight="bold">
        บทความล่าสุด
      </Text>
      <Box bgColor="#302f2f" p={6} borderRadius="lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box mb={4} bgColor="#191919" borderRadius="md" shadow="md">
            <Image
              w="full"
              borderTopLeftRadius="md"
              borderTopRightRadius="md"
              objectFit="cover"
              h={320}
              alt="test"
              src="https://s.isanook.com/ho/0/rp/rc/w555h333/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hvLzAvdWQvNDgvMjQxNjQxL2NvdmVyX3Nhbm9va19ob3Jvc2NvcGUtMjAyMi5qcGc=.jpg"
            />
            <Box p={2}>
              <Text fontWeight="bold" color="gold" fontSize={22}>
                ดวงรายสัปดาห์ ช่วง 21 - 27 พ.ย.65 โดย หมอฝ้าย
              </Text>
              <Text color="white">
                Loripsum - The best generator I could find because it optionally
                includes lists, formatting, blockquotes and a bunch of other
                HTML Pan Ipsum
              </Text>
            </Box>
          </Box>
          <Box>
            {article1.map((item, index) => (
              <CardArticle {...item} key={index} />
            ))}
          </Box>
        </SimpleGrid>
      </Box>
      <Box bgColor="#302f2f" mt={4} p={6} borderRadius="lg">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {article2.map((item, index) => (
            <CardArticleVertical {...item} key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Home;
