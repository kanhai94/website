import React from "react";
import { Box, Center, useDisclosure } from "@chakra-ui/react";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTopFirst from "../Navbar/NavbarTopFirst";
import Header from "../Header/HeaderFirst";
import HeaderSecond from "../HeaderBody";
import CardFirst from "../HeaderCard/CardFirst";
import RemarksComp from "../RemarksComp/RemarksComp";
import Twocards from "../Twocards/Twocards";
import Footer from "../Footer/Footer";
import { useMediaQuery } from 'react-responsive'

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <Box>
      {/* components */}
      <NavbarTop />
      <NavbarTopFirst />
      <Header />                                          
      <Box w={isTabletOrMobile ? '100%' : '80%'} ml='auto' mr="auto" p={2}>
      <HeaderSecond />
      <CardFirst />
      <RemarksComp />
      </Box>
     
      <Box ml="auto" mr="auto">
        <Twocards />
      </Box>

      <Box ml="auto" mr="auto" bg="#1a202d">
        <Footer />
      </Box>

    </Box>
  );
}

export default Home;
