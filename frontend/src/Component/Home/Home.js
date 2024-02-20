import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTopFirst from "../Navbar/NavbarTopFirst";
import Header from "../Header/HeaderFirst";
import HeaderSecond from "../Header/HeaderSecond";
import CardFirst from "../HeaderCard/CardFirst";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      {/* components */}
      <NavbarTop />
      <NavbarTopFirst />
      <Header />
      <HeaderSecond />
      <CardFirst />
    </Box>
  );
}

export default Home;
