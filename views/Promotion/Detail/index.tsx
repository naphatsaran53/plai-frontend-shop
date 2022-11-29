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

function ArticleDetail() {
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

  const contentStyle: TextProps = {
    fontSize: 18,
    marginBottom: 8,
    whiteSpace: "pre-wrap",
  };

  return (
    <Container maxW="6xl" mt={4}>
      <Box bgColor="white" borderRadius="md" py={4} px={10}>
        <Text fontWeight="bold" fontSize={24} color="teal">
          ดูดวงความรัก เดือนกันยายน 2565 สำหรับ 12 ราศี ฉบับคนโสดและคนมีคู่
        </Text>
        <Flex align="center">
          <Text fontSize={16}>วันที่โพสต์ 20 พ.ค. 2562</Text>
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
        <Image
          mt={6}
          mb={8}
          mx="auto"
          w="600px"
          alt="test"
          src="https://my.kapook.com/rq/580/435/50/imagescontent/mobile_web/245/m_262456_3855.png"
        />
        <Text {...contentStyle}>
          ราศีเมษ.. ราศีต้นธาตุไฟ บอกถึงหัวใจที่ใสซื่อบริสุทธิ์ ตรงไปตรงมา
          ซื่อสัตย์ และจริงใจ แต่เมื่อมีลมเป่า ก็จะเป็นดุจเปลวเพลิงในเตาหลอมโลหะ
          ที่พร้อมจะหลอมธาตุที่แข็งแกร่งที่สุดให้ละลาย... อารมณ์ร้อนแรง
          ยับยั้งไม่ได้จากการถูก “ลมปาก” เป่า ก็จะทำให้ความรัก..ร้าวราน
        </Text>
        <Text {...contentStyle}>
          เดือนกันยายน ปลายฝนต้นหนาว ที่อาจทำให้รักอุ่นละมุน หรือร้าวราน
          เพราะจากดาวศุกร์ ดาวแห่งความรัก ความสุข ได้โคจรมาสถิต ณ เขตราศีสิงห์
          ราศีธาตุไฟ ไฟที่ให้พลังงาน
          และความอบอุ่นอย่างสม่ำเสมอกับคนที่อยู่ชิดใกล้ ขณะที่ดาวอังคาร
          ดาวประจำตัวของชาวราศีเมษ ได้โคจรมาสถิต ณ เขตราศีพฤษภ ราศีธาตุดิน
          ที่มีวัวเป็นสัญลักษณ์ บ่งบอกถึงความอึด อดทน และทรหด
          ที่มีมากขึ้นกว่าปกติ แต่เมื่อถูกสิ่งเร้ามากระตุ้นก็อาจทำให้ “คลั่ง”
          ได้ ซึ่งนั่นคือสัญญาณบ่งบอกว่า ในเดือนนี้
        </Text>
        <Text {...contentStyle}>
          หากกำลังสนุกกับการหาเงิน มีความสุขกับการก้มหน้าก้มตานับเงิน
          ก็ควรแบ่งเวลามาใส่ใจ มาแบ่งปันความสุข ความสนุกให้กับคนรัก
          คู่ครองให้มากขึ้น ถึงจะอยู่ในเกณฑ์ดีที่จะทำให้สัมพันธ์รักหวาน
          โรแมนติกมากขึ้น ซึ่งอาจจะเป็นโอกาสได้บุตร-ธิดา มาเป็นโซ่ทองคล้องใจ
        </Text>
        <Text {...contentStyle}>
          แต่ถ้าสัมพันธ์รักกำลังชืดชา ไม่ใส่ใจให้มากพอ ก็ควรทำใจไว้ว่า ความรัก
          ความอบอุ่น ปรารถนาดี ที่เคยได้รับ ก็อาจถูกแบ่งปัน
          ถ่ายโอนไปให้คนที่เห็นคุณค่าของ เขา/เธอ อาจทำให้คุณต้องเย็นยะเยือก
          อ้างว้างไปอีกนาน!
        </Text>
        <Text {...contentStyle}>
          สำหรับคนโสด หากยอมก้าวออกมาจาก money zone ของตนเองบ้าง
          แล้วเดินทางท่องเที่ยวไปตามสถานที่ต่างๆ ที่แปลกใหม่ ไม่เคยไป
          ก็อยู่ในเกณฑ์ดีที่จะทำให้พบรัก เจอคนถูกใจ อาจร่วมสานรัก
          พัฒนาสัมพันธ์จนได้ครองคู่
        </Text>
        <Text {...contentStyle}>
          ราศีที่จะมีผลต่อความรัก ราศีตุลย์ แค่มองตาก็รู้ใจ ราศีกุมภ์
          สนุกด้วยกันอย่างเฮไหน เฮนั่น และราศีพฤษภ เงินทองมากองอยู่ตรงหน้า
        </Text>
      </Box>
      <Box mt={4}>
        <Box mb={6}>
          <Text fontWeight="bold" fontSize={28}>
            บทความแนะนำ
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {article2.map((item, index) => (
            <CardArticleVertical {...item} key={index} />
          ))}
        </SimpleGrid>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {article2.map((item, index) => (
            <CardArticleVertical {...item} key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default ArticleDetail;
