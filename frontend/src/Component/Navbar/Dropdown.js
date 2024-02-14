
import React from 'react';

import {
  Text, Menu, MenuItem, MenuButton, MenuList,  Image,useDisclosure} from '@chakra-ui/react'; // Importing Chakra UI components

import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation


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
      Paralegal Services
    </MenuButton>
    <MenuList onMouseEnter={onOpen} bg="black" color="white" borderRadius={0} mt={-2} onMouseLeave={onClose} cursor={"pointer"}>
      <MenuItem bg="black" color="white">Litigation Support</MenuItem>
      <MenuItem bg="black" color="white">Contract Management</MenuItem>
      <MenuItem bg="black" color="white">Legal Research</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default Dropdown