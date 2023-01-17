import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { isMemberName } from "typescript";

export type Profile = {
  data: any;
  membername: string;
  membersurname: string;
  memberphone: number;
  linename: string;
};

const Profile = () => {
  const [data, setData] = useState<any>([]);

  const [membername, setName] = useState("");
  const [membersurname, setSurname] = useState("");
  const [memberphone, setPhone] = useState("");
  const [linename, setLinename] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://m-plai.eazydevs.com/api/memberprofile/U4fd7ba00a8a2f7edb9580139111d2687X"
      )
      .then((response) => {
        setData(response.data.data[0]);
      });
  }, []);

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSernameChange = (event: any) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: any) => {
    setName(event.target.value);
  };

  const handleLinenameChange = (event: any) => {
    setName(event.target.value);
  };

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
            <Input
              type="text"
              color="#FFFF"
              value={data.membername}
              onChange={handleNameChange}
            ></Input>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>นามสกุล</FormLabel>
            <Input type="text" value={data.membersurname}></Input>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>เบอร์โทร</FormLabel>
            <Input type="text" value={data.memberphone} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>ไลน์</FormLabel>
            <Input type="text" value={data.linename} />
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
