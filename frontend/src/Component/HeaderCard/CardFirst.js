import React, { useState } from "react";
import { Box, Button, Text, Flex, SimpleGrid, Center } from "@chakra-ui/react";
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
import { MdPersonalInjury } from "react-icons/md";

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
      <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        <Card bg="#1a202d" borderRadius={'0px'}  color="white" align={'center'} p={6}>
          <CardBody mt={2} >
          

                <MdPersonalInjury size={100} />
                <Text>
                Personal Injury
              </Text>
              
          </CardBody>
          
        </Card>
        <Card bg="#1a202d" borderRadius={'0px'}  color="white" align={'center'}  p={6}>
          <CardBody mt={5} >
          

                <MdPersonalInjury size={100} />
                <Text>
                Personal Injury
              </Text>
              
          </CardBody>
          
        </Card>
        <Card bg="#1a202d" borderRadius={'0px'}  color="white" align={'center'} p={6}>
          <CardBody mt={5} >
          

                <MdPersonalInjury size={100} />
                <Text>
                Personal Injury
              </Text>
              
          </CardBody>
          
        </Card>
        <Card bg="#1a202d" borderRadius={'0px'}  color="white" align={'center'} p={6}>
          <CardBody mt={5} >
          

                <MdPersonalInjury size={100} />
                <Text>
                Personal Injury
              </Text>
              
          </CardBody>
          
        </Card>
        <Card bg="#1a202d" borderRadius={'0px'}  color="white" align={'center'} p={6}>
          <CardBody mt={5} >
          

                <MdPersonalInjury size={100} />
                <Text>
                Personal Injury
              </Text>
              
          </CardBody>
          
        </Card>
        <Card bg="#1a202d" borderRadius={'0px'}  color="white" align={'center'} p={6}>
          <CardBody mt={5} >
          

                <MdPersonalInjury size={100} />
                <Text>
                Personal Injury
              </Text>
              
          </CardBody>
          
        </Card>
       
       
     
       
        {/* </Flex> */}
      </SimpleGrid>
    </Box>


  );
};
export default CardFirst;
