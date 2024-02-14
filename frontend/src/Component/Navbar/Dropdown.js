
import React from 'react';

import {
  Text, Menu, MenuItem, MenuButton, MenuList,useDisclosure} from '@chakra-ui/react'; // Importing Chakra UI components

// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation


function Dropdown() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
    <MenuButton
      as={Text}
      variant="unstyled"
      colorScheme="teal"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      p={9}
      pl={2}
      pr={2}
    > 
Area of Practice
    </MenuButton>

    <MenuList onMouseEnter={onOpen} bg="black" color="white" borderRadius={0} mt={-2} onMouseLeave={onClose} cursor={"pointer"}>
      <MenuItem bg="black" color="white">Personal Injury Law</MenuItem>
      <MenuItem bg="black" color="white">Immigration Law</MenuItem>
      <MenuItem bg="black" color="white">Real Estate Law</MenuItem>
      <MenuItem bg="black" color="white">Employment Law</MenuItem>
      <MenuItem bg="black" color="white">Mass Torts</MenuItem>
      <MenuItem bg="black" color="white">Worker’s Compensation</MenuItem>
      <MenuItem bg="black" color="white">Bankruptcy & Foreclosure</MenuItem>


    </MenuList>
  </Menu>
  )
}

export default Dropdown