import {
  Box,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container maxW="6xl" mt={4}>
      <Box mt={10}>
        <Text fontWeight="bold" color="white" fontSize={28}>
          ข้อมูลส่วนตัว
        </Text>
      </Box>
      <Box bgColor="#302f2f" borderRadius="md" mb={4} mt={6} px={2} py={10}>
        <Container>
          <FormControl mb={4}>
            <FormLabel>ชื่อ</FormLabel>
            <Input type="text" value="Worawut" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>นามสกุล</FormLabel>
            <Input type="text" value="Niamsiri" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>เบอร์โทร</FormLabel>
            <Input type="text" value="020222222" />
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

export default Profile;
