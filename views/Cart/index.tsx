import React, { useEffect, useState, useContext } from "react";
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
  Spacer,
  Show,
  Hide,
} from "@chakra-ui/react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import ModalPaymentType from "./components/ModalPaymentType";
import axios from "axios";
import { DataContext } from "@/pages/_app";
import product from "@/pages/product";

export type Cart = {
  data: any;
  productid: string;
  productname: string;
  unitamount: number;
  amount: number;
  deliveryamount: number;
  unit: number;
};

function Cart() {
  const [isOpenModalPaymentType, setIsOpenModalPaymentType] = useState(false);

  const [productDetail, setProductDetail] = useState<any>([]);
  const [priceDelivery, setPriceDelivery] = useState<any>([]);
  const [amount, setAmount] = useState<any>([]);

  const { cartnum, setCartNum } = useContext(DataContext);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://m-plai.eazydevs.com/api/cartdetail/U4fd7ba00a8a2f7edb9580139111d2687X"
      )
      .then((response) => {
        setAmount(response.data.amount);
        setPriceDelivery(response.data.deliveryamount);
        setProductDetail(response.data.data); //แสดงรายละเอียดสินค้า
      });
  }, []);

  const handleClickIncrease = async (
    productid: string,
    unit: number,
    amount: number,
    deliveryamount: number
  ) => {
    axios
      .post("https://m-plai.eazydevs.com/api/calcart", {
        productid: productid,
        lineuid: "U4fd7ba00a8a2f7edb9580139111d2687X",
        unit: unit + 1,
        amount: amount,
        deliveryamount: deliveryamount,
      })
      .then((response) => {
        setProductDetail(response.data.data); //ส่งค่ากลับคืนไปที่การแสดงรายละเอียดสินค้า
        setCartNum(response.data.cart);
        setAmount(response.data.amount);
        setPriceDelivery(response.data.deliveryamount);
      });
  };

  const handleClickReduce = async (
    productid: string,
    unit: number,
    amount: number,
    deliveryamount: number
  ) => {
    if (unit > 1) {
      axios
        .post("https://m-plai.eazydevs.com/api/calcart", {
          productid: productid,
          lineuid: "U4fd7ba00a8a2f7edb9580139111d2687X",
          unit: unit - 1,
          amount: amount,
          deliveryamount: deliveryamount,
        })
        .then((response) => {
          setProductDetail(response.data.data); //ส่งค่ากลับคืนไปที่การแสดงรายละเอียดสินค้า
          setCartNum(response.data.cart);
          setAmount(response.data.amount);
          setPriceDelivery(response.data.deliveryamount);
        });
      console.log(unit);
    }
  };

  const handleClickDelete = async (
    productid: string,
    unit: number,
    amount: number,
    deliveryamount: number
  ) => {
    if (unit >= 1) {
      axios
        .post("https://m-plai.eazydevs.com/api/removecalcart", {
          productid: productid,
          lineuid: "U4fd7ba00a8a2f7edb9580139111d2687X",
          amount: amount,
          deliveryamount: deliveryamount,
        })
        .then((response) => {
          // if (unit >= 1) {
          setIsDisabled(true);
          setProductDetail(response.data.data); //ส่งค่ากลับคืนไปที่การแสดงรายละเอียดสินค้า
          setCartNum(response.data.cart);
          setAmount(response.data.amount);
          setPriceDelivery(response.data.deliveryamount);
        });
      console.log(unit);
    }
  };

  return (
    <Container maxW="6xl" mt={4}>
      <Box bgColor="#302f2f" borderRadius="md" mb={4} px={6}>
        <Grid p={4} templateColumns="repeat(8, 1fr)">
          <GridItem colSpan={1}>
            <Flex h="full" align="center">
              <Checkbox />
            </Flex>
          </GridItem>
          <GridItem colSpan={3} fontWeight="bold" color="white" fontSize={18}>
            สินค้า
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" color="white" fontSize={18}>
            ราคาต่อชิ้น
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" color="white" fontSize={18}>
            จำนวน
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" color="white" fontSize={18}>
            ราคารวม
          </GridItem>
          <GridItem colSpan={1} fontWeight="bold" color="white" fontSize={18}>
            ลบ
          </GridItem>
        </Grid>
      </Box>
      <Box bgColor="#302f2f" borderRadius="md" py={4} mb={4} px={6}>
        {productDetail.map((item: Cart, index: any) => (
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
                <Text color="white" ml={2}>
                  {item.productname}
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Text color="white"> {item.unitamount} บาท</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <InputGroup size="sm">
                  <InputLeftAddon p={0}>
                    <Button
                      size="sm"
                      p={0}
                      onClick={() =>
                        handleClickReduce(
                          item.productid,
                          item.unit,
                          item.amount,
                          item.deliveryamount
                        )
                      }
                    >
                      <Icon as={FaMinus} />
                    </Button>
                  </InputLeftAddon>
                  <Input
                    w="50px"
                    type="number"
                    color="white"
                    value={item.unit}
                  />
                  <InputRightAddon p={0}>
                    <Button
                      size="sm"
                      p={0}
                      onClick={() =>
                        handleClickIncrease(
                          item.productid,
                          item.unit,
                          item.amount,
                          item.deliveryamount
                        )
                      }
                    >
                      <Icon as={FaPlus} />
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Text color="white" ml="10px">
                  {" "}
                  {item.amount} บาท
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex h="full" align="center">
                <Button
                  colorScheme="red"
                  size="sm"
                  p={0}
                  onClick={() =>
                    handleClickDelete(
                      item.productid,
                      item.amount,
                      item.deliveryamount,
                      item.unit
                    )
                  }
                >
                  <Icon as={FaTrashAlt} />
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        ))}
      </Box>

      <Box bgColor="#302f2f" textAlign="right" borderRadius="md" p={4} px={8}>
        <Box>
          <Flex>
            <Spacer />
            <Flex mr="10px" color="white" fontSize="18px">
              <Text mr="10px">ค่าจัดส่ง</Text>
              {priceDelivery}
            </Flex>

            <Flex mr="10px" color="white" fontSize="18px">
              <Text mr="10px">รวมทั้งหมด</Text>
              {amount}
              <Text ml="10px" mr="20px">
                บาท
              </Text>
            </Flex>

            <Button
              colorScheme="orange"
              px={10}
              onClick={() => setIsOpenModalPaymentType(true)}
            >
              ซื้อสินค้า
            </Button>
          </Flex>
        </Box>
        {/* ))} */}
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
