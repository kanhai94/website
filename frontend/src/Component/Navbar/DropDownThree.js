
import React from 'react';

import {
  Text, Menu, MenuItem, Flex, Box, MenuButton, MenuList,  Image,useDisclosure} from '@chakra-ui/react'; // Importing Chakra UI components




function Dropdown() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
  <  Menu isOpen={isOpen}>
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

      Back-Office Services
    </MenuButton>
    <MenuList onMouseEnter={onOpen} bg="black" color="white" borderRadius={0} mt={-2} onMouseLeave={onClose} cursor={"pointer"}>
      <MenuItem bg="black" color="white">Accounting & Finance</MenuItem>
      <MenuItem bg="black" color="white">Legal Digital Marketing</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default Dropdown