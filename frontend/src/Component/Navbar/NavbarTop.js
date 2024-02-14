import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react'; // Importing Chakra UI components
import { SocialIcon } from 'react-social-icons'; // Importing SocialIcon component
import { Icon } from '@chakra-ui/react'; // Importing Icon component
import { MdEmail, MdPhone } from 'react-icons/md'; // Importing MdEmail and MdPhone icons
//import { FaGlobe } from 'react-icons/fa'; // Importing FaGlobe icon for the globe
import { TfiWorld } from "react-icons/tfi"; // Importing TfiWorld icon

function NavbarTop() { 
  return (
    // Box component to contain the navbar with specified styling
    <Box fontSize={"15px"} backgroundColor="#000000" width="100%" h={41}>
      {/* Flex container to arrange content horizontally */}
      <Flex justifyContent="space-between" t={10} maxWidth={'80%'} mx="auto"  alignItems={'center'}>
        
        {/* Flex container for the left side content */}
        <Flex alignItems={'center'} mt={"10px"}>
          {/* Text component containing the TfiWorld icon and support services text */}
          {/* <Text style={{ textAlign: 'center', alignItems: 'center', color: "white", fontSize: "14px" }}> */}
            <TfiWorld color='red' style={{ width: '14px', height: "14px" }}/><span style={{color: "white",marginLeft:"10px"}}>24/7 Support Services</span>
          {/* </Text> */}
        </Flex>
        
        {/* Flex container for the right side content */}
        <Flex alignItems={'center'} mt={1}>
          {/* Email icon and text */}
          <Icon as={MdEmail} style={{ height: 20, width: 20, marginRight: "5px", color: "white" }}/> 
          <span style={{ marginRight: "5px", color: "white", fontSize: "14px" }}>kanhai94@gmail.com</span>
          
          {/* Phone icon and text */}
          <Icon as={MdPhone} style={{ height: 20, width: 20, marginRight: "5px", color: "white" }} />
          <span style={{ marginRight: "5px", color: "white", fontSize: "14px" }}>9430085302</span>
          
          {/* Social icons */}
          <SocialIcon url="https://linkedin.com/in/couetilc" style={{ height: 30, width: 30, marginRight: "5px" }} />
          <SocialIcon url="https://facebook.com/" style={{ height: 30, width: 30, marginRight: "5px" }} />
          <SocialIcon url="https://plus.google.com/YourUsername" style={{ height: 30, width: 30, marginRight: "5px" }} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavbarTop;







