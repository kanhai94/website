import React from 'react'
import {Box,useDisclosure} from '@chakra-ui/react'
import NavbarTop  from '../Navbar/NavbarTop'
import NavbarTopFirst  from '../Navbar/NavbarTopFirst'
import HeaderFirst from '../Header/index'



function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
 <NavbarTop/> 
 <NavbarTopFirst/>
 <HeaderFirst/>
  
    </Box>
  )
}

export default Home