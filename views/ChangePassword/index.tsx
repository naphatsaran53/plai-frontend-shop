import {
  Box,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const ChangePassword = () => {
  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text color="white" fontWeight="bold" fontSize={28}>
          เปลี่ยนรหัสผ่าน
        </Text>
      </Box>
      <Box bgColor="#302f2f" borderRadius="md" mb={4} mt={6} px={2} py={10}>
        <Container>
          <FormControl mb={4}>
            <FormLabel>รหัสผ่านใหม่</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>ยืนยันรหัสผ่านใหม่</FormLabel>
            <Input type="password" />
          </FormControl>
          <Box textAlign="right" mt={4}>
            <Button colorScheme="blue" type="submit">
              บันทึก
            </Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default ChangePassword;
