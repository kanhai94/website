import React from 'react';
import {
  Text, Menu, MenuItem, Flex, Box, MenuButton, MenuList, MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, Button,useDisclosure
} from '@chakra-ui/react'; // Importing Chakra UI components
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function NavbarTopFirst() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // Box component to contain the navbar with specified styling
    <Box fontSize={"14px"} backgroundColor="#00f0f1" width="100%">
      
      <Flex justifyContent="space-between" t={10} maxWidth={'80%'} mx="auto" alignItems={'center'}>
        {/* Logo */}
        <Flex alignItems="center">
          <img src="https://www.pncguam.com/wp-content/uploads/2022/01/gavel-justice.jpg" alt="logo" width={100} height={100} objectFit="cover" />
        </Flex>
        <Flex alignItems={'center'}>

        </Flex>

        {/* Flex container for the right side content */}
        <Flex alignItems={'center'}>

          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
         

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Area of Practice
            </MenuButton>
            <MenuList>
              <MenuItem>Personal Injury Law </MenuItem>
              <MenuItem>Immigration Law </MenuItem>
              <MenuItem>Real Estate Law </MenuItem>
              <MenuItem>Employment Law </MenuItem>
              <MenuItem>Mass Torts</MenuItem>
              <MenuItem>Worker’s Compensation </MenuItem>
              <MenuItem>Bankruptcy & Foreclosure</MenuItem>


            </MenuList>
          </Menu>


          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Back-Office Services
            </MenuButton>
            <MenuList>
              <MenuItem>Accounting & Finance</MenuItem>
              <MenuItem>Legal Digital Marketing</MenuItem>

            </MenuList>
          </Menu>
          {/* Phone icon and text */}

          <Link to="/rcm" style={{ color: '#fff', textDecoration: 'none' }}>RCM</Link>

          <Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavbarTopFirst;







