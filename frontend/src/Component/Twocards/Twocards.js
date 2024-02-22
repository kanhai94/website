import React from "react";
import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";



function Twocards() {
    return (

        <Box w={'100%'} ml='auto' mr='auto' bg="black" textAlign={"left"} >
            
            <Flex flexWrap={'wrap'} >


                <Box w={'50%'} bg={'#2d313c'} color="white" pr={10} pl={32}   pb={10}>
                    <br />
                    <br />
                    <Text fontSize="34px" fontWeight={600}>
                        Need Legal Assistance? Get in Touch with Bolster Legal!
                    </Text>
                    <br />

                    <Text color="yellow">
                        We are a team of experienced paralegals with expert knowledge in our respective areas of law. We are ready to assist with your legal matter.
                    </Text>
                    <br />
                    <Text>
                    Over the years, we built our success with experience and expertise. One client and one day at a time, we have been premiering to deliver the best solutions through integrated methodologies.
                    </Text>
                    <br />
                    <Text>
                    Our main objective is to meet the needs and aspirations of our clients. The most significant advantages of using our outsourcing services are enhancing your practice with regard to core activities, cost and time savings, increased efficiency and productivity, reduced overhead, reduced risk of malpractice, evaded legal quagmire, and improved operations.
                    </Text>

                </Box>
                <Box w={'50%'} bg={'#f8cf65'} pl={10}  pr={28}   pb={10}>
                    <br></br>
                    <br></br>

                    <Text fontWeight={'800'} fontSize={'34'}>
                        Why Choose Bolster Legal
                    </Text>
                    <Flex alignItems={'center'}>
                            <Image
                                borderRadius='full'
                                boxSize='120px'
                               
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                        <Box ml={5}>
                            <Text fontSize={'20'} fontWeight={800} mb={3}>
                                Free up your time
                            </Text>
                            {/* <br /> */}
                            <Text>
                                Imagine what you could do with 5 or 10 extra hours each week! How about 15 or 20 extra hours each week? When you delegate those tedious and time-consuming tasks to us, you free up your time to focus on the big picture and other important things in your life.
                            </Text>
                        </Box>

                    </Flex>
                    <Flex alignItems={'center'}>
                            <Image
                                borderRadius='full'
                                boxSize='120px'
                               
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                        <Box ml={5 } mt={7}>
                            <Text fontSize={'20'} fontWeight={800} mb={3}>
                                Free up your time
                            </Text>
                            {/* <br /> */}
                            <Text>
                                Imagine what you could do with 5 or 10 extra hours each week! How about 15 or 20 extra hours each week? When you delegate those tedious and time-consuming tasks to us, you free up your time to focus on the big picture and other important things in your life.
                            </Text>
                        </Box>

                    </Flex>


                </Box>
            </Flex>
        </Box>

    )
}

export default Twocards