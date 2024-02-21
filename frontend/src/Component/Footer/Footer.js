import React from 'react'
import { Box, Flex, Text, SimpleGrid, Spacer } from "@chakra-ui/react";
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Divider,
    ButtonGroup,
    Icon
} from "@chakra-ui/react";
import { MdPersonalInjury } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdSms } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'; // Importing SocialIcon component
import { MdEmail, MdPhone } from 'react-icons/md'; // Importing MdEmail and MdPhone icons
import { MdArrowForwardIos } from "react-icons/md";
function Footer() {
    return (
        <Box bg="#1a202d" color="white" w="100%" >
            <Box display={'flex'} justifyContent={'space-around'} >
                <Card w="xs" bg="#1a202d" borderRadius={'0px'} color="white" align={'center'} p={6}>
                    <CardBody mt={2} >
                        <Flex>
                            <IoCall size={70} />
                            <Text ml={1}>
                                CALL US NOW !
                                <br />

                                +1 (337) 448-4110
                            </Text>
                        </Flex>
                    </CardBody>

                </Card>
                <Card bg="#1a202d" borderRadius={'0px'} color="white" align={'center'} p={6}>
                    <CardBody mt={2} >
                        <Flex>
                            <MdSms size={70} />
                            <Text ml={2} >
                                CALL US NOW !
                                <br />

                                +1 (337) 448-4110
                            </Text>
                        </Flex>
                    </CardBody>

                </Card>
                <Card bg="#1a202d" borderRadius={'0px'} color="white" align={'center'} p={6}>
                    <CardBody mt={2} >
                        <Flex>
                            <FaWhatsapp size={70} />
                            <Text mr={1}>
                                CALL US NOW !
                                <br />

                                +1 (337) 448-4110
                            </Text>
                        </Flex>
                    </CardBody>

                </Card>
            </Box>
            <Box border={' 1px #2d3444 solid'}></Box>
      
        
            <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'}>
                <Card w="xs" bg="#1a202d"   borderRadius={'0px'} color="white" align={'center'} p={2} textAlign={'left'}>
                    <CardBody mt={2} >
                        <Text fontSize={'23px'} fontWeight={700} color={'#f8cf65'}>
                            About Bolster Legal
                        </Text>
                        <br/>
                        <Text>
                            One-stop paralegal assistance to licensed attorneys and law firms, providing customized offers to suit your unique needs!
                        </Text>
                        <Flex alignItems={'center'} mt={5}> 

                            <SocialIcon url="https://linkedin.com/in/couetilc" style={{ height: 30, width: 30, marginRight: "5px" }}  />
                            <SocialIcon url="https://facebook.com/" style={{ height: 30, width: 30, marginRight: "5px" }} />
                            <SocialIcon url="https://plus.google.com/YourUsername" style={{ height: 30, width: 30, marginRight: "5px" }} />
                        </Flex>
                    </CardBody>

                </Card>
                <Card border={' 1px #2d3444 solid'} borderTop={0} borderBottom={0} maxW='sm' bg="#1a202d" borderRadius={'0px'} color="white" textAlign={'left'}p={2} >
                    <CardBody mt={2}>
                        <Text fontSize={'23px'} fontWeight={700} color={'#f8cf65'}>
                            JHQ Partner
                        </Text>
                        <Box >
                            <Image src='https://bolsterlegal.com/wp-content/uploads/2022/06/JHQ-VPP-Badge-Teal-1.png'  alt='Dan Abramov' />
                        </Box>
                    </CardBody>

                </Card>
                <Card  maxW='sm' bg="#1a202d" borderRadius={'0px'}color="white" textAlign={'left'} p={2}>
                    <CardBody mt={2} >
                      
                        <Text fontSize={'23px'} fontWeight={700} color={'#f8cf65'}>
                            Practice Areas

                        </Text>
                        <br/>
                        <Flex alignItems={'center'} mb={2}>
                        <MdArrowForwardIos size={13} color={'#f8cf65'} fontWeight={900}/> 
                        <Text ml={1}>Personal Injury Law</Text>
                        </Flex>
                        <Flex alignItems={'center'} mb={2}>
                        <MdArrowForwardIos size={13} color={'#f8cf65'} fontWeight={900}/> 
                        <Text ml={1}>Mass Torts</Text>
                        </Flex>
                        <Flex alignItems={'center'} mb={2}>
                        <MdArrowForwardIos size={13} color={'#f8cf65'} fontWeight={900}/> 
                        <Text ml={1}>Immigration Law</Text>
                        </Flex> <Flex alignItems={'center'} mb={2}>
                        <MdArrowForwardIos size={13} color={'#f8cf65'} fontWeight={900}/> 
                        <Text ml={1}>Employment Law</Text>
                        </Flex> <Flex alignItems={'center'} mb={2}>
                        <MdArrowForwardIos size={13} color={'#f8cf65'} fontWeight={900}/> 
                        <Text ml={1}>Worker’s Compensation</Text>
                        </Flex> <Flex alignItems={'center'} mb={2}>
                        <MdArrowForwardIos size={13} color={'#f8cf65'} fontWeight={900}/> 
                        <Text ml={1}>Bankruptcy & Foreclosure</Text>
                        </Flex>
                    </CardBody>

                </Card>
            </Box>
            <Box border={' 1px #2d3444 solid'}></Box>
            
            {/* Footer Text */}
            <Box mt={7} fontWeight={600} w={'50%'} mr={'auto'} ml={'auto'} color={'#959696'}  pb={3}>
            <Flex >
                <Text>Home</Text>
                <Spacer/>
                <Text>Blog</Text>
                <Spacer/>

                <Text>Privacy Policy </Text>
                <Spacer/>

                <Text>Refund and Cancellation</Text>
                <Spacer/>

                <Text>Terms of Service</Text>
            </Flex>
            </Box>
            <Text color={"#757d8b"} pb={7} textAlign={'center'}>Kanhai Legal © All Rights Reserved</Text>
        </Box>
    )
}

export default Footer