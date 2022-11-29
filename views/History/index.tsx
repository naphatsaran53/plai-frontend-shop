import {
  Box,
  Container,
  Checkbox,
  Text,
  Image,
  Flex,
  Grid,
  GridItem,
  InputGroup,
  Button,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

function History() {
  return (
    <Container maxW="6xl" mt={4}>
      <Box bgColor="white" borderRadius="md" mb={4} px={2} py={2}>
        <Tabs isFitted>
          <TabList>
            <Tab>สำเร็จแล้ว</Tab>
            <Tab>ยกเลิก</Tab>
            <Tab>คืนสินค้า</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box>
                <SimpleGrid mt={2} columns={5} spacing={1}>
                  <Box shadow="md" borderRadius="md" bgColor="white">
                    <Box h="120px" position="relative">
                      <Image
                        position="absolute"
                        w="full"
                        h="full"
                        objectFit="cover"
                        alt="test"
                        borderTopLeftRadius="md"
                        borderTopRightRadius="md"
                        src={
                          "https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN113.jpeg?1662877154"
                        }
                      />
                    </Box>
                    <Box p={1}>
                      <Text color="teal" fontSize={16} fontWeight="bold">
                        แผ่นทองยมราชประทานทรัพย์
                      </Text>
                      <Flex mt={2}>
                        <Text color="teal" fontSize={18}>
                          ราคา 499
                        </Text>
                        <Spacer />
                        <Text color="teal" fontSize={18}>
                          จำนวน 10
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
            {[1, 2].map((item, index) => (
              <TabPanel key={index}>
                <Box py={10} textAlign="center">
                  <Text color="teal">ยังไม่มีรายการ</Text>
                </Box>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default History;
