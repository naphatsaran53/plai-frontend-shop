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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

import ModalPaymentType from "./components/ModalPaymentType";

function Cart() {
  const [isOpenModalPaymentType, setIsOpenModalPaymentType] = useState(false);

  return (
    <Container maxW="6xl" mt={4}>
      <Box bgColor="white" borderRadius="md" mb={4} px={6}>
        <Grid p={4} templateColumns="repeat(8, 1fr)">
          <GridItem colSpan={1}>
            <Flex h="full" align="center">
              <Checkbox />
            </Flex>
          </GridItem>
          <GridItem colSpan={3} fontWeight="bold" fontSize={18}>
            สินค้า
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" fontSize={18}>
            ราคาต่อชิ้น
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" fontSize={18}>
            จำนวน
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" fontSize={18}>
            ราคารวม
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" fontSize={18}>
            ลบ
          </GridItem>
        </Grid>
      </Box>
      <Box bgColor="white" borderRadius="md" py={4} mb={4} px={6}>
        {["", ""].map((item, index) => (
          <Grid p={4} key={index} templateColumns="repeat(8, 1fr)">
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Checkbox />
              </Flex>
            </GridItem>
            <GridItem colSpan={3}>
              <Flex h="full" align="center">
                <Image
                  borderRadius="md"
                  alt="test"
                  w="80px"
                  src="https://bigwin.s3.ap-southeast-1.amazonaws.com/images/navaracha/product/IMGMAIN90.jpeg?1654427550"
                />
                <Text ml={2}>แก้ของเสริมดวง</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Text> 499 บาท</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <InputGroup size="sm">
                  <InputLeftAddon p={0}>
                    <Button size="sm" p={0}>
                      <Icon as={FaPlus} />
                    </Button>
                  </InputLeftAddon>
                  <Input w="50px" type="number" />
                  <InputRightAddon p={0}>
                    <Button size="sm" p={0}>
                      <Icon as={FaMinus} />
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Text> 499 บาท</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Button colorScheme="red" size="sm" p={0}>
                  <Icon as={FaTrashAlt} />
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        ))}
      </Box>
      <Box bgColor="white" textAlign="right" borderRadius="md" p={4} px={8}>
        <Text as="span" mr={4} color="teal" fontSize={18}>
          ราคารวม 499 บาท
        </Text>
        <Button
          colorScheme="orange"
          px={10}
          onClick={() => setIsOpenModalPaymentType(true)}
        >
          ซื้อสินค้า
        </Button>
      </Box>
      {isOpenModalPaymentType && (
        <ModalPaymentType
          isOpenModal={isOpenModalPaymentType}
          onCloseModal={() => setIsOpenModalPaymentType(false)}
        />
      )}
    </Container>
  );
}

export default Cart;
