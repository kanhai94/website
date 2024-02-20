import React from "react";
import { Box,Divider,Flex,Text,SimpleGrid } from "@chakra-ui/react";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTopFirst from "../Navbar/NavbarTopFirst";
import Header from "../Header/HeaderFirst";
import HeaderSecond from "../HeaderBody";
import CardFirst from "../HeaderCard/CardFirst";
function DataShow() {
  return (
   <Box w={"100%"}  ml='auto' mr={'auto'} >
{/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'> */}
<Flex justifyContent={'space-around'} flexWrap={'wrap'} Spacer={14} mt={9} mb={9} ml={'auto'} mr={'auto'}>
      <Box p={3}>
      <Text fontWeight={800} fontSize={34}>
            3434
        </Text>
         
        <Text fontSize={24} >
        Dedicated Paralegals
        </Text>
      </Box>

      <Box p={3}>
      <Text fontWeight={800} fontSize={34}>
      105

        </Text>
         
        <Text fontSize={24} >
        Satisfied Clients
        </Text>
      </Box>

      <Box p={3}>
      <Text fontWeight={800} fontSize={34}>
      87627
        </Text>
         
        <Text fontSize={24} >
        Personal Injury Cases
        </Text>
      </Box>

      <Box p={3}>
      <Text fontWeight={800} fontSize={34}>
      99%

        </Text>
         
        <Text fontSize={24} >
        Successful Cases
        </Text>
      </Box>
      </Flex>
      {/* </SimpleGrid> */}

   </Box>
  )
}

export default DataShow