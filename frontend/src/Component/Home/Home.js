import React from "react";
import { Box, Center, useDisclosure } from "@chakra-ui/react";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTopFirst from "../Navbar/NavbarTopFirst";
import Header from "../Header/HeaderFirst";
import HeaderSecond from "../HeaderBody";
import CardFirst from "../HeaderCard/CardFirst";
import DataShow from "../AchivementDataShow/Datashow";
import CardSecond from  "../HeaderCard/CardSecond";

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
        <DataShow/>
        <CardSecond/>
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
