import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Box,
  Radio,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

interface IModalProps {
  isOpenModal: boolean;
  onCloseModal(): void;
}

export default function ModalPaymentType({
  isOpenModal,
  onCloseModal,
}: IModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpenModal) {
      onOpen();
    } else if (!isOpenModal) {
      onClose();
    }
  }, []);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignSelf="center" fontSize={24}>
          ช่องทางการชำระชำระเงิน
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Tabs isFitted>
            <TabList>
              <Tab>ธนาคาร</Tab>
              <Tab>บัตรเครดิต</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex
                  border="1px solid whitesmoke"
                  p={4}
                  borderRadius="md"
                  shadow="sm"
                  mb={2}
                >
                  <Radio value="1">
                    <Flex align="center">
                      <Image
                        mr={2}
                        h={8}
                        alt="test"
                        src="https://cf.shopee.co.th/file/af82ae9d9ee79d1a064d6496896440ca"
                      />
                      <Text as="span"> ธนาคารกสิกรไทย</Text>
                    </Flex>
                  </Radio>
                </Flex>
                <Flex
                  border="1px solid whitesmoke"
                  p={4}
                  borderRadius="md"
                  shadow="sm"
                  mb={2}
                >
                  <Radio value="1">
                    <Flex align="center">
                      <Image
                        mr={2}
                        h={8}
                        alt="test"
                        src="https://cf.shopee.co.th/file/c21d34c0a31c00441daf05a97f96df38"
                      />
                      <Text as="span"> ธนาคารไทยพาณิชย์</Text>
                    </Flex>
                  </Radio>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  border="1px solid whitesmoke"
                  p={4}
                  borderRadius="md"
                  shadow="sm"
                  mb={2}
                >
                  <Radio value="1">
                    <Flex align="center">
                      <Image
                        mr={4}
                        h={8}
                        alt="test"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/9f6f1831fb61c65952c4cdb1189d7cb8.png"
                      />
                      <Text as="span"> ธนาคารกสิกรไทย **** 0001</Text>
                    </Flex>
                  </Radio>
                </Flex>
                <Flex
                  border="1px solid whitesmoke"
                  p={4}
                  borderRadius="md"
                  shadow="sm"
                  mb={2}
                >
                  <Radio value="1">
                    <Flex align="center">
                      <Image
                        mr={4}
                        h={8}
                        alt="test"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/9f6f1831fb61c65952c4cdb1189d7cb8.png"
                      />
                      <Text as="span"> ธนาคารทหารไทย **** 0002</Text>
                    </Flex>
                  </Radio>
                </Flex>
                <Flex
                  border="1px solid whitesmoke"
                  p={4}
                  borderRadius="md"
                  shadow="sm"
                  mb={2}
                >
                  <Radio value="1">
                    <Flex align="center">
                      <Image
                        mr={4}
                        h={8}
                        alt="test"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/9f6f1831fb61c65952c4cdb1189d7cb8.png"
                      />
                      <Text as="span"> ธนาคารไทยพาณิชย์ **** 0003</Text>
                    </Flex>
                  </Radio>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter display="block">
          <Button w="full" colorScheme="blue" type="submit">
            สั่งสินค้า
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
