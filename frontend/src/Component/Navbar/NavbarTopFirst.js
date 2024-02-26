import React from 'react';
import Dropdown from './Dropdown';
import DropDownThree from './DropDownThree';
import DropDownTwo from './DropDownTwo'
import {
  Text, Flex, Box, Image,useDisclosure,Button
} from '@chakra-ui/react'; // Importing Chakra UI components
import { slide as Menu } from 'react-burger-menu'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
const img = "./court.png"

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '16px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}





function NavbarTopFirst() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    // Box component to contain the navbar with specified styling
    
    <Box fontSize={"14px"} backgroundColor="#white" width="100%">
      {isTabletOrMobile == false ?  <Flex justifyContent="space-between" t={10} maxWidth={'80%'} mx="auto" alignItems={'center'}>
        {/* Logo */}
        <Flex alignItems="center">
          {/* <img src="https://www.pncguam.com/wp-content/uploads/2022/01/gavel-justice.jpg" alt="logo" width={100} height={100} objectFit="cover" />
           */}
          <Image boxSize={{ base: "50px",sm:'100px' , md: "100px" }}
            objectFit='cover' src={img} alt="court logo" />
        </Flex>
        <Flex alignItems={'center'}>
        </Flex>
        {/* Flex container for the right side content */}
        <Flex alignItems={'center'} justifyContent={'space-between'} w="70%">

          <Link to="/about" style={{ color: '#000000', textDecoration: 'none' }}>About</Link>
          {
            [1, 2, 3].map((item) => {
              if (item === 1) {
                return <Dropdown />
              }
              if (item === 2) {
                return <DropDownTwo />
              }
              if (item === 3) {
                return <DropDownThree />
              }
            })
          }



          <Text p={9} pl={3} pd={3} > <Link to="/rcm" style={{ color: '#000000', textDecoration: 'none', }}>RCM</Link></Text>

          <Text> <Link to="/blog" style={{ color: '#000000', textDecoration: 'none' }}>Blog</Link></Text>
          <Text p={9} ><Link to="/contact" style={{ color: '#000000', textDecoration: 'none' }}>Contact</Link></Text>
        </Flex>
      </Flex> : <Box position="relative"  display="flex" > <Image boxSize={{ base: "50px",sm:'100px' , md: "100px" }}
            objectFit='cover' src={img} alt="court logo" /> <Menu   styles={ styles } right bubble>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item--small" href="">Settings</a>
      </Menu>
      </Box>}
  
      
    </Box>
  );
}

export default NavbarTopFirst;







