import React from "react";
import { Box, Center, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from 'react-responsive'


function Twocards() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 904px)' })
    return (

        <Box w={"100%"} ml='auto' mr='auto' bg="black" textAlign={"left"}  >
            < Flex flexWrap={isTabletOrMobile ? 'wrap':'nowrap'} >

                <Box textAlign={{ base:'center',sm:'center',md:'left'}} flex={'1 1 50%'}  bg={'#2d313c'} color="white" pr={{base:2,sm:2,md:10,lg:10}} pl={{base:2, sm:2, md:14,lg:32}}pb={10}>
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
                <Box flex={'1 1 50%'} textAlign={{ base:'center',sm:'center',md:'left'}} bg={'#f8cf65'} pl={{base:1,sm:2, md:10}} pr={{base:1, sm:6,md:5, lg:28}} pb={10} >
                    <br></br>
                    <br></br>

                    <Text fontWeight={'800'} fontSize={'34'}>
                        Why Choose Bolster Legal
                    </Text>
                    <Flex alignItems={'center'} flexWrap={isTabletOrMobile ? 'wrap':'nowrap'} justifyContent={isTabletOrMobile ? 'center':'nowrap'}>
                        <Image 
                        mt ={{base:4,sm:4,md:1}}
                            borderRadius='full'
                            boxSize={{base:'100px', sm:'100px', md:'120px'}}

                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <Box ml={{base:0,sm:2,md:5,lg:5}}p={{base:2,sm:2,md:0}}>
                            <Text fontSize={'20'} fontWeight={800} mb={3}>
                                Free up your time
                            </Text>
                            {/* <br /> */}
                            <Text>
                                Imagine what you could do with 5 or 10 extra hours each week! How about 15 or 20 extra hours each week? When you delegate those tedious and time-consuming tasks to us, you free up your time to focus on the big picture and other important things in your life.
                            </Text>
                        </Box>

                    </Flex>
                    <Flex  alignItems={'center'}flexWrap={isTabletOrMobile ? 'wrap':'nowrap'} justifyContent={isTabletOrMobile ? 'center':'nowrap'} >
                        <Image
                         mt ={{base:5,sm:4,md:1}}
                            borderRadius='full'
                            boxSize={{base:'100px', sm:'100px', md:'120px'}}
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <Box  ml={{base:0,sm:2,md:5,lg:5}}p={{base:2,sm:2,md:0}} mt={{base:2,md:4}}>
                            <Text fontSize={'20'} fontWeight={800} mb={3}>
                                Free up your time
                            </Text>
                           
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