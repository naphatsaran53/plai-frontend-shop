import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Image,
  Container,
  Button,
  Text,
  Spacer,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Badge,
} from "@chakra-ui/react";
import {
  FaCartPlus,
  FaChevronDown,
  FaSignOutAlt,
  FaUserAlt,
  FaKey,
  FaBook,
  FaPlay,
} from "react-icons/fa";
import axios from "axios";
import { DataContext } from "@/pages/_app";

export type Profile = {
  data: any;
  membername: string;
  membersurname: string;
  memberphone: number;
  linename: string;
};

interface INavbarProps {
  menus: IMenuProps[];
  onOpenLoginModal(): void;
  onOpenRegisterModal(): void;
}

interface IMenuProps {
  menuLink: string;
  menuName: string;
  menuIcon: string;
}

const Navbar = ({
  onOpenLoginModal,
  onOpenRegisterModal,
  menus,
}: INavbarProps) => {
  const router = useRouter();

  const { cartNum } = useContext(DataContext);

  const [dataProfile, setDataProfile] = useState<any>([]);

  // const data = useContext(DataContext);

  useEffect(() => {
    axios
      .get(
        "https://m-plai.eazydevs.com/api/memberprofile/U4fd7ba00a8a2f7edb9580139111d2687X"
      )

      .then((response) => {
        setDataProfile(response.data.data[0]);
      });
  }, []);

  const showUser = true;
  return (
    <Box shadow="md" bgColor="#302f2f" borderBottom="1px solid gold" p={3}>
      <Container maxW="6xl">
        <Flex w="full" align="center">
          <Link href="/">
            <Text color="gold" fontSize={28} fontWeight="bold">
              หมอปลาย ณวรชา
            </Text>
          </Link>
          <Flex ml={4}>
            {menus.map((item, index) => (
              <Link href={item.menuLink} key={index}>
                <Text px={2} mx={1} color="white" fontSize={16}>
                  {item.menuName}
                </Text>
              </Link>
            ))}
          </Flex>
          <Spacer />
          <Flex>
            {!showUser && (
              <Flex>
                <Button
                  colorScheme="teal"
                  mr={2}
                  onClick={() => onOpenLoginModal()}
                >
                  เข้าสู่ระบบ
                </Button>
                <Button
                  variant="outline"
                  borderColor="gold"
                  color="gold"
                  onClick={() => onOpenRegisterModal()}
                >
                  สมัครสมาชิก ฟรี!
                </Button>
              </Flex>
            )}
            {showUser && (
              <Flex>
                <Link href="/cart">
                  <Button position="relative" colorScheme="gold" px={1} mr={2}>
                    <Icon as={FaCartPlus} color="black" />
                    {cartNum && (
                      <Badge
                        top={1}
                        right={1}
                        position="absolute"
                        borderRadius="50%"
                        bgColor="red"
                        color="white"
                      >
                        {cartNum}
                      </Badge>
                    )}
                  </Button>
                </Link>
                <Menu>
                  <MenuButton
                    mr={2}
                    as={Button}
                    colorScheme="teal"
                    rightIcon={<FaChevronDown />}
                  >
                    <Flex align="center">
                      <Text as="span">{dataProfile.membername}</Text>
                    </Flex>
                  </MenuButton>
                  <MenuList bgColor="#302f2f">
                    <MenuItem
                      bgColor="#302f2f"
                      color="white"
                      icon={<FaPlay />}
                      onClick={() => router.push("/confirm-payment")}
                    >
                      แจ้งชำระเงิน
                    </MenuItem>
                    <MenuItem
                      bgColor="#302f2f"
                      color="white"
                      icon={<FaBook />}
                      onClick={() => router.push("/history")}
                    >
                      ประวัติการสั่งซื้อ
                    </MenuItem>
                    <MenuItem
                      bgColor="#302f2f"
                      color="white"
                      icon={<FaUserAlt />}
                      onClick={() => router.push("/profile")}
                    >
                      โปรไฟล์
                    </MenuItem>
                    <MenuItem
                      bgColor="#302f2f"
                      color="white"
                      icon={<FaKey />}
                      onClick={() => router.push("/change-password")}
                    >
                      เปลี่ยนรหัสผ่าน
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      bgColor="#302f2f"
                      color="white"
                      icon={<FaSignOutAlt />}
                    >
                      ออกจากระบบ
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
