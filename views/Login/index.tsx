import Link from "next/link";
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
  Text,
  Icon,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { InputFormControl } from "@/components/Input";

import { FaEnvelope, FaKey, FaFacebook, FaLine } from "react-icons/fa";

interface ILoginProps {
  isOpenModal: boolean;
  onCloseModal(): void;
}

interface ILoginFormProps {
  username: string;
  password: string;
}

const Login = ({ isOpenModal, onCloseModal }: ILoginProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultForm: ILoginFormProps = {
    username: "",
    password: "",
  };

  const {
    getValues,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultForm,
  });

  const handleOnSubmit = (value: ILoginFormProps) => {
    console.log(value);
  };

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
      <ModalContent bgColor="#302f2f">
        <ModalHeader alignSelf="center" color="gold" fontSize={24}>
          เข้าสู่ระบบ
        </ModalHeader>
        <ModalCloseButton color="white" />
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <ModalBody>
            <Box textAlign="center">
              <Text color="white" fontSize={14} mb={2}>
                เข้าสู่ระบบเพื่อซื้อสินค้า
              </Text>
            </Box>
            <Box mb={4}>
              <Controller
                control={control}
                name="username"
                rules={{
                  required: {
                    value: true,
                    message: "กรุณากรอกอีเมลล์",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <InputFormControl
                    iconLeft={<FaEnvelope color="white" size={16} />}
                    placeholder="อีเมลล์"
                    maxLength={100}
                    value={value}
                    onChange={onChange}
                    error={errors.username}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: "กรุณากรอกรหัสผ่าน",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <InputFormControl
                    iconLeft={<FaKey color="white" size={16} />}
                    placeholder="รหัสผ่าน"
                    value={value}
                    onChange={onChange}
                    error={errors.password}
                  />
                )}
              />
            </Box>
            <Box textAlign="right">
              <Link href="/forget-password">
                <Text
                  as="a"
                  color="white"
                  textDecorationLine="underline"
                  fontSize={14}
                >
                  ลืมรหัสผ่าน?
                </Text>
              </Link>
            </Box>
          </ModalBody>

          <ModalFooter display="block">
            <Button w="full" colorScheme="blue" type="submit">
              เข้าสู่ระบบ
            </Button>
            <Box className="divider" my={2}>
              <Text fontSize={16} color="teals" as="span">
                หรือ
              </Text>
            </Box>
            <Button w="full" colorScheme="facebook" mb={2} onClick={onClose}>
              <Icon as={FaFacebook} mr={2} />
              เข้าสู่ระบบด้วย Facebook
            </Button>
            <Button w="full" bgColor="#00B900" color="white" onClick={onClose}>
              <Icon as={FaLine} mr={2} />
              เข้าสู่ระบบด้วย LINE
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Login;
