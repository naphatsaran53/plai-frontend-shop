import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { commonMenus } from "@/commons/menu";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "@/views/Login";
import Register from "@/views/Register";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);

  const handlenOpenLoginModal = () => {
    setIsOpenRegisterModal(false);
    setIsOpenLoginModal(true);
  };

  const handlenOpenRegisterModal = () => {
    setIsOpenLoginModal(false);
    setIsOpenRegisterModal(true);
  };

  return (
    <motion.div>
      <Navbar
        menus={commonMenus}
        onOpenLoginModal={handlenOpenLoginModal}
        onOpenRegisterModal={handlenOpenRegisterModal}
      />
      <Box minH="50vh" mb={20}>
        {children}
      </Box>
      <Footer />
      {isOpenLoginModal && (
        <Login
          isOpenModal={isOpenLoginModal}
          onCloseModal={() => setIsOpenLoginModal(false)}
        />
      )}
      {isOpenRegisterModal && (
        <Register
          isOpenModal={isOpenRegisterModal}
          onCloseModal={() => setIsOpenRegisterModal(false)}
        />
      )}
    </motion.div>
  );
};

export default Layout;
