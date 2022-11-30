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

  const showUser = true;
  return (
    <Box shadow="md" bgColor="rgba(255,255,255,0.72)" p={3}>
      <Container maxW="6xl">
        <Flex w="full" align="center">
          <Link href="/">
            <Text color="teal" fontSize={28} fontWeight="bold">
              หมอปลาย ณวรชา
            </Text>
          </Link>
          <Flex ml={4}>
            {menus.map((item, index) => (
              <Link href={item.menuLink} key={index}>
                <Text px={2} mx={1} fontSize={16}>
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
                <Button onClick={() => onOpenRegisterModal()}>
                  สมัครสมาชิก ฟรี!
                </Button>
              </Flex>
            )}
            {showUser && (
              <Flex>
                <Link href="/cart">
                  <Button position="relative" px={1} mr={2}>
                    <Icon as={FaCartPlus} color="teal" />
                    <Badge
                      top={1}
                      right={1}
                      position="absolute"
                      borderRadius="50%"
                      bgColor="red"
                      color="white"
                    >
                      2
                    </Badge>
                  </Button>
                </Link>
                <Menu>
                  <MenuButton mr={2} as={Button} rightIcon={<FaChevronDown />}>
                    <Flex align="center">
                      <Text as="span">Worawut Niamsiri</Text>
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      icon={<FaPlay />}
                      onClick={() => router.push("/confirm-payment")}
                    >
                      แจ้งชำระเงิน
                    </MenuItem>
                    <MenuItem
                      icon={<FaBook />}
                      onClick={() => router.push("/history")}
                    >
                      ประวัติการสั่งซื้อ
                    </MenuItem>
                    <MenuItem
                      icon={<FaUserAlt />}
                      onClick={() => router.push("/profile")}
                    >
                      โปรไฟล์
                    </MenuItem>
                    <MenuItem
                      icon={<FaKey />}
                      onClick={() => router.push("/change-password")}
                    >
                      เปลี่ยนรหัสผ่าน
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<FaSignOutAlt />}>ออกจากระบบ</MenuItem>
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
