import React from "react";
import { Box, Center, useDisclosure } from "@chakra-ui/react";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTopFirst from "../Navbar/NavbarTopFirst";
import Header from "../Header/HeaderFirst";
import HeaderSecond from "../HeaderBody";
import CardFirst from "../HeaderCard/CardFirst";
import RemarksComp from "../RemarksComp/RemarksComp";
import Twocards from "../Twocards/Twocards";

function Home() {
  return (
    <Box>
      {/* components */}
      <NavbarTop />
      <NavbarTopFirst />
      <Header />
      <Box w="90%" ml='auto' mr="auto">
        <HeaderSecond />
       <CardFirst />
        <RemarksComp/>
      </Box>
      <Box bg="green">
        {/* <Center> */}
        {/* <Twocards/> */}

        {/* </Cente r> */}

      </Box>

    </Box>
  );
}

export default Home;
