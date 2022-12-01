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
  Icon,
  Text,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { InputFormControl } from "@/components/Input";
import { useEffect } from "react";

import { FaEnvelope, FaKey, FaFacebook, FaLine } from "react-icons/fa";

interface ILoginProps {
  isOpenModal: boolean;
  onCloseModal(): void;
}

const Register = ({ isOpenModal, onCloseModal }: ILoginProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultForm: any = {
    firstName: "",
    lastName: "",
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

  useEffect(() => {
    if (isOpenModal) {
      onOpen();
    } else if (!isOpenModal) {
      onClose();
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent bgColor="#302f2f">
        <ModalHeader alignSelf="center" color="white" fontSize={24}>
          สมัครสสมาชิก
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button w="full" colorScheme="facebook" mb={2} onClick={onClose}>
            <Icon as={FaFacebook} mr={2} />
            เข้าสู่ระบบด้วย Facebook
          </Button>
          <Button w="full" bgColor="#00B900" color="white" onClick={onClose}>
            <Icon as={FaLine} mr={2} />
            เข้าสู่ระบบด้วย LINE
          </Button>
          <Box className="divider" my={2}>
            <Text fontSize={16} color="teals" as="span">
              หรือ
            </Text>
          </Box>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: {
                value: true,
                message: "กรุณากรอกชื่อ",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputFormControl
                label="ชื่อ"
                maxLength={100}
                value={value}
                onChange={onChange}
                error={errors.firstName}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: {
                value: true,
                message: "กรุณากรอกอีเมล",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputFormControl
                label="อีเมล"
                maxLength={100}
                value={value}
                onChange={onChange}
                error={errors.lastName}
              />
            )}
          />
          <Controller
            control={control}
            name="username"
            rules={{
              required: {
                value: true,
                message: "กรุณากรอกนามสกุล",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputFormControl
                label="นามสกุล"
                maxLength={100}
                value={value}
                onChange={onChange}
                error={errors.username}
              />
            )}
          />
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
                type="password"
                label="รหัสผ่าน"
                maxLength={100}
                value={value}
                onChange={onChange}
                error={errors.password}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: {
                value: true,
                message: "กรุณากรอกยืนยันรหัสผ่าน",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputFormControl
                type="password"
                label="ยืนยันรหัสผ่าน"
                maxLength={100}
                value={value}
                onChange={onChange}
                error={errors.password}
              />
            )}
          />
        </ModalBody>

        <ModalFooter display="block">
          <Button w="full" colorScheme="blue" type="submit">
            สมัครสมาชิก
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Register;
