import React from "react";
import { Box,SimpleGrid } from "@chakra-ui/react";





function Twocards() {
  return (
    <div>
        <Box w={'100%'}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Box w='50%' bg={'red'}>a</Box>
            <Box w='40%' bg={'yellow'}>b</Box>
        </SimpleGrid>
        </Box>
    </div>
  )
}

export default Twocards