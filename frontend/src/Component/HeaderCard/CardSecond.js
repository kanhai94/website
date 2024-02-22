import React, { useState } from "react";
import { Box, Button, Text, Flex,SimpleGrid} from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const CardFirst = () => {
  const header = "Areas of Practice";
  return (
    
    <Box style={{ position: "relative" }} textAlign={"center"}>
      {/* Apply styles to the span elements */}
      <Text
        style={{
          marginTop: "70px",
          fontSize: "35px",
          fontWeight: "bold",
          top: "30%",
        }}
      >
        {header}
      </Text>
      {/* <Flex> */}
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>

        
        
      <Card >
        <CardBody>
          
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />

          <Text>
            Personal Injury
          </Text>
         

         <box style={{ boder: "2px solid black" }}>
         Santa Clara Valley Transportation Authority et al., v. Valley Recycling


         </box>
        </CardBody>



        
        
      </Card>
      {/* </Flex> */}
      </SimpleGrid>
    </Box>
    

  );
};
export default CardFirst;
