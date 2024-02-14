import React from 'react'
import NavbarTop  from '../Navbar/NavbarTop'
import NavbarTopFirst  from '../Navbar/NavbarTopFirst'
import { Image,Box } from '@chakra-ui/react'

import {
 useDisclosure
} from '@chakra-ui/react'; // Importing Chakra UI components
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
 <NavbarTop/> 
  {/* component */}
 <NavbarTopFirst/>
  
    </Box>
  )
}

export default Home