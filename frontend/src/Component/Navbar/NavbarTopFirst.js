import React from 'react';
import Dropdown from './Dropdown';
import DropDownThree from './DropDownThree';
import DropDownTwo from './DropDownTwo'
import {
  Text, Menu, MenuItem, Flex, Box, MenuButton, MenuList,  Image} from '@chakra-ui/react'; // Importing Chakra UI components

import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const img ="./court.png"
function NavbarTopFirst() {
  
  return (
    // Box component to contain the navbar with specified styling
    <Box fontSize={"14px"} backgroundColor="#00f0f1" width="100%">

      <Flex justifyContent="space-between" t={10} maxWidth={'80%'} mx="auto" alignItems={'center'}>
        {/* Logo */}
        <Flex alignItems="center">
          {/* <img src="https://www.pncguam.com/wp-content/uploads/2022/01/gavel-justice.jpg" alt="logo" width={100} height={100} objectFit="cover" />
           */}
          <Image boxSize='100px'
            objectFit='cover' src={img} alt="court logo" />
        </Flex>
        <Flex alignItems={'center'}>

        </Flex>

        {/* Flex container for the right side content */}
        <Flex alignItems={'center'} justifyContent={'space-between'} w="70%">

          <Link to="/about" style={{ color: '#000000', textDecoration: 'none' }}>About</Link>
           {
            [1,2,3].map((item)=>{
             if(item ==1){
              return <Dropdown/>
             }
             if(item ==2){
              return <DropDownTwo/>
             }
             if(item ==3){
              return <DropDownThree/>
             }
            })
           }
     


         <Text p={9} pl={3} pd={3} > <Link     to="/rcm" style={{ color: '#000000', textDecoration: 'none', }}>RCM</Link></Text>
         
         <Text> <Link to="/blog" style={{ color: '#000000', textDecoration: 'none' }}>Blog</Link></Text>
         <Text p={9} ><Link to="/contact" style={{ color: '#000000', textDecoration: 'none' }}>Contact</Link></Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavbarTopFirst;







