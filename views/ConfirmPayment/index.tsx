import {
  Box,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

import { UploadImage } from "@/components/Input";

function ConfirmPayment() {
  const {
    getValues,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      slip: null,
    },
  });

  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={28}>
          ยืนยันการชำระเงิน
        </Text>
      </Box>
      <Box bgColor="white" borderRadius="md" mb={4} mt={6} px={2} py={10}>
        <Container>
          <Controller
            control={control}
            name="slip"
            render={({ field: { onChange, value } }) => (
              <UploadImage
                label="อัพโหลด Slip"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Box textAlign="right" mt={4}>
            <Button colorScheme="blue" type="submit">
              ยืนยันการชำระเงิน
            </Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default ConfirmPayment;
